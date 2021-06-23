const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

require('dotenv').config();

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

const app = express();

app.use(cors());

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: false
  })
);
app.use(bodyParser.json({limit: '500mb'}));
app.use(express.static(__dirname + '/'));

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
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

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
