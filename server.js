const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cron = require("node-cron");
const AWS = require('aws-sdk');
const fs = require('fs');

let cron_running = false;

require('dotenv').config();

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    correctClockSkew: true,
});

// Models
const File = require("./models/File");

// Routes

const users = require("./routes/api/users");
const projects = require("./routes/api/projects");
const payments = require("./routes/api/payments");
const briefing = require("./routes/api/briefing");
const services = require("./routes/api/services");
const chat = require("./routes/api/chat");
const file = require("./routes/api/file");
const backup = require("./routes/api/backup");
const dashboard = require("./routes/api/dashboard");
const actions = require("./routes/api/actions");
const passwordReset = require("./routes/api/passwordReset");

const app = express();

app.use(cors());

// Bodyparser middleware
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(bodyParser.json({limit: '500mb'}));
app.use(express.static(__dirname + '/'));

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/projects", projects);
app.use("/api/payments", payments);
app.use("/api/briefing", briefing);
app.use("/api/services", services);
app.use("/api/chat", chat);
app.use("/api/file", file);
app.use("/api/backup", backup);
app.use("/api/dashboard", dashboard);
app.use("/api/actions", actions);
app.use("/api/password-reset", passwordReset);

const port = process.env.PORT || 5000;

cron.schedule("* * * * * *", async () => {
    console.log("Cronjob is running");
    const files = await File.find({ is_uploaded: false });
    if (cron_running === false && files.length > 0) {
        let uploaded_cnt = 0;
        cron_running = true;
        console.log("The number of uploading files: ", files.length);
        for (let i = 0 ; i < files.length; i ++) {
            let fileContent = null;
            let params = {};
            try {
                fileContent = fs.readFileSync(__dirname + files[i].temp_path);
                params = {
                    Bucket: 'apirender-dashboard-bucket-2020-sep',
                    Key: files[i].key_name,
                    Body: fileContent
                };
            }
            catch (e) {
                console.log(e);
                continue;
            }

            try {
                const stored = await s3.upload(params).promise();
                await File.updateOne({ _id: files[i]._id }, {
                    $set: {
                        is_uploaded: true,
                        progress: 100,
                        path: stored.Location,
                        temp_path: "",
                    }
                });
                console.log("uploaded!!!");
                uploaded_cnt ++;
                if (uploaded_cnt >= files.length)
                    cron_running = false;
                fs.unlinkSync(__dirname + files[i].temp_path);
            } catch (e) {
                console.log(e);
                cron_running = false;
                break;
            }
        }
    }
});

app.listen(port, () => console.log(`Server up and running on port ${port} !`));