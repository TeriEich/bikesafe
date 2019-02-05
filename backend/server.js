require('dotenv').config()

const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const logger = require("morgan");
const schemas = require("./schemas");
const Accident = schemas.Accident;
const Theft = schemas.Theft;
// const ServerPortRouter = require('./routes/ServerPortRouter');

const API_PORT = 3001;
const app = express();
const router = express.Router();

// this is our MongoDB database
const dbRoute = process.env.DB_URI;

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(cors());

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

/*
this is our GET method
this method fetches all available data in our database
*/
app.get("/api", (req, res) => {
  const json = {};
  Accident.find((err, accidents) => {
    if (err) return res.json({ success: false, error: err });
    json.accidentData = accidents;

    Theft.find((err, thefts) => {
      if (err) return res.json({ success: false, error: err });
      json.theftData = thefts;
      console.log('theft data', json.theftData)
      res.json(json);
    }).limit(7000)
  })
});

/*
this is our POST method
this method sends user generated accident data into the database
*/
app.post("/api/accident", (req, res) => {

  const newAccident = {
    location: {
      type: 'Point',
      coordinates: [parseFloat(req.body.location.lng), parseFloat(req.body.location.lat)]
    },
    date: req.body.date,
    year: req.body.date.substring(0, 4),
    visibility: req.body.visibility,
    light: req.body.light,
    roadConditions: req.body.roadConditions,
    injuryType: req.body.injuryType,
    neighbourhood: req.body.neighbourhood,
    source: 'User Submitted Data'
  }

  const finalAccident = new Accident(newAccident)
    finalAccident.save({}, (err, success) => {
    console.log('SAVE?', err)
    console.log('SAVED', success);
  });

  return res.json({ success: true })
});

/*
this is our POST method
this method sends user generated theft data into the database
*/
app.post("/api/theft", (req, res) => {

  const newTheft = {
    location: {
      type: 'Point',
      coordinates: [parseFloat(req.body.location.lng), parseFloat(req.body.location.lat)]
    },
    occurrenceYear: req.body.date.substring(0, 4),
    occurrenceMonth: req.body.date.substring(5, 7),
    occurrenceDay: req.body.date.substring(8, 10),
    bikeMake: req.body.bikeMake,
    bikeModel: req.body.bikeModel,
    neighbourhood: req.body.neighbourhood,
    source: 'User Submitted Data'
  }

  const finalTheft = new Theft(newTheft)
    finalTheft.save({}, (err, success) => {
  });

  console.log(req.body)
  return res.json({ success: true })
});


// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));