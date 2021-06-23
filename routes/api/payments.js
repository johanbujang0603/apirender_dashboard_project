const express = require("express");
const router = express.Router();
const {ObjectId} = require('mongodb'); // or ObjectID 

// Load Project model
const Service = require("../../models/Service");
const Project = require("../../models/Project");
const Payment = require("../../models/Payment");

router.post("/charge", async (req, res) => {
    const body = req.body;
    const projectID = body.projectID;
    const userEmail = body.userEmail;
    const deliveryOption = body.deliveryOption;
    const deliveryAddress = body.deliveryAddress;

    // get total amount of this project
    let totalAmount = await Service.aggregate([
      { $match: {
        project: ObjectId(projectID)
      }},
      {
        $group : {
          _id : null,
          total : {
              $sum : "$total_price"
            }
      }},
    ]);
    totalAmount = totalAmount[0].total;
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    stripe.customers.list({email: userEmail})
    .then(async(customers) => {
      if (customers.data.length > 0) {
        return customers.data[0].id;
        // makePayment(stripe, totalAmount, body.token.id, projectID, customerID, res);
      }
      else {
        let customerID = await stripe.customers.create({
          description: 'customer for apirender.com',
          email: userEmail,
          source: body.token.id,
        })
        .then((customer) => {
          return customer.id;
          // makePayment(stripe, totalAmount, body.token.id, projectID, customerID, res);
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
        .then(() => {
          // set the project into paid.
          Project.findById(projectID, function(err, project) {
            if (!project)
              return next(new Error('Could not load document'));
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
              //
              service.is_paid = true;
              service.save();
            });
          });
          res.json({message: "Successed"});
        })
        .catch(err => res.status(400).json({message: err}));
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
