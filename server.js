require('./src/config/db');
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();

const users = require("./src/routes/api/users");
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());


const dbRoute =
'mongodb://localhost:27017/Authenticationcopy';


mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));


db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(passport.initialize());

require("./src/config/passport")(passport);


app.use("/api/users", users);


const port = process.env.PORT || 5001; 

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
