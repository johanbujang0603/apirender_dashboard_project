const express = require("express");
const router = express.Router();
const {ObjectId} = require('mongodb'); // or ObjectID 
const sgMail = require("@sendgrid/mail");

// Load Project model
const Service = require("../../models/Service");
const Project = require("../../models/Project");
const Payment = require("../../models/Payment");

router.post("/charge", async (req, res) => {
    const body = req.body;
    const services = req.body.services;
    const projectID = body.projectID;
    const userEmail = body.userEmail;
    const deliveryOption = body.deliveryOption;
    const deliveryAddress = body.deliveryAddress;
    const couponCode = body.couponCode;
    const projectObj =  await Project.findById(projectID);
    const coupon = await Coupon.findOne({ code: couponCode });

    // get total amount of this project
    let totalAmount = await Service.aggregate([
        {
            $match: { project: ObjectId(projectID) }
        },
        {
            $group : {
                _id : null,
                total : {
                    $sum : "$total_price"
                }
            }
        },
    ]);
    totalAmount = totalAmount[0].total;

    if (coupon) {
        totalAmount = totalAmount * (100 - parseInt(coupon.value)) / 100;
        console.log(totalAmount);
    }

    let newOrders = [];
    services.forEach((service) => {
        if (service.quantity !== 0 && service.total_price !== 0) {
            let orders = JSON.parse(service.orders);
            let isPresent = orders.some(function (el) {
                return el.depth === 1;
            });
            if (isPresent === false) {
                orders.unshift({ name: service.name, depth: 1 });
            }
            orders.forEach((order) => {
                newOrders.push({ service: service, order: order });
            });
        }
    });

    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    stripe.customers.list({email: userEmail})

    .then(async (customers) => {
        if (customers.data.length > 0) {
            return customers.data[0].id;
        }
        else {
            let customerID = await stripe.customers.create({
                description: 'customer for apirender.com',
                email: userEmail,
                source: body.token.id,
            })
            .then((customer) => {
                return customer.id;
            });
            return customerID;
        }
    })
    .then((customer) => {
        try {
            stripe.charges.create({
                amount: parseInt(totalAmount * 100),
                currency: "aud",
                customer: customer,
                description: ``
            })
            .then(async () => {
                // set the project into paid.
                Project.findById(projectID, async function(err, project) {
                    if (!project)
                        return next(new Error('Project not exist!'));
                    project.is_paid = true;
                    if (deliveryOption) {
                        project.delivery_option = deliveryOption;
                        project.delivery_address = deliveryAddress;
                    }
                    project.status = 'WAITING FOR FILES';
                    project.save();
                });
                // update is_paid to true for all services by project id.
                Service.find({project: ObjectId(projectID)}, function(err, services) {
                    if (!services)
                        return next(new Error('Could not load documents'));
                    services.map((service, index) => {
                        // create new payment document in Payment table
                        const newPayment = new Payment({
                            service_id: service._id,
                            token_id: body.token.id,
                            option: "Stripe",
                        });
                        newPayment.save();
                        service.is_paid = true;
                        service.save();
                    });
                });
                
                sgMail.setApiKey(process.env.SENDGRID_API_KEY);
                const msg = {
                    from: process.env.VERIFIED_SENDER_EMAIL,
                    personalizations: [
                        {
                            to: [
                                {
                                    email: userEmail,
                                },
                                {
                                    email: "orders@propertyrender.com",
                                },
                            ],
                            dynamic_template_data: {
                                "orderNumber": projectObj.unique_id,
                                "orders": newOrders,
                                "orderTotal": totalAmount
                            },
                        },
                    ],
                    templateId: process.env.SENDGRID_ORDER_TEMPLATE_ID,
                };

                try {
                    await sgMail.send(msg);
                } catch (e) {
                    console.log(e);
                }
                
                res.json({message: "Successed"});
            })
            .catch(err => res.status(400).json({message: err.message}));
        } catch (err) {
            res.status(400).json({message: err});
        }
    });
});

router.post("/paypal-transaction-complete", async (req, res) => {
  const projectID = req.body.projectId;
  Project.findById(projectID, function(err, project) {
    if (!project)
      return next(new Error('Could not load document'));
    project.is_paid = true;
    project.status = 'WAITING FOR FILES';
    project.save();
  });
  // update is_paid to true for all services by project id.
  Service.find({project: ObjectId(projectID)}, function(err, services) {
    let newPayments = [];
    if (!services)
      return next(new Error('Could not load documents'));
    services.map((service, index) => {
      service.is_paid = true;
      service.save();
      newPayments.push({
        service_id: service._id,
        order_id: req.body.orderId,
        option: "Paypal",
      });
    });
    Payment.insertMany(newPayments, function(err, doc) {
      if (err) {
          return res.status(400).json({message: err});
      }
      return res.status(200).json({message: "Success"});
    });
  });
});

module.exports = router;
