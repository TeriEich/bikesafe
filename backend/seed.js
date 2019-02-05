require('dotenv').config()

const mongoose = require("mongoose");
const schemas = require("./schemas");
const Accident = schemas.Accident;
const Theft = schemas.Theft;
const accidents = require("./accidents");
const thefts = require("./thefts")

// this is our MongoDB database
const dbRoute = process.env.DB_URI;

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

//seed database with Toronto Police Services accident data
function seedAccidents() {
  const parsedAccidents = accidents.map(accident => {
  	return {
		location: {
			type: 'Point',
			coordinates: [parseFloat(accident.LONGITUDE), parseFloat(accident.LATITUDE)]
		},
		date: accident.DATE,
		year: accident.YEAR,
		time: accident.TIME,
		hour: accident.Hour,
		street1: accident.STREET1,
		street2: accident.STREET2,
		visibility: accident.VISIBILITY,
		light: accident.LIGHT,
		roadConditions: accident.RDSFCOND,
		injuryType: accident.INJURY,
		neighbourhood: accident.Hood_Name,
		source: 'Toronto Police Services'
  	}
  })

  parsedAccidents.forEach(accident => {
  	var newAccident = new Accident(accident);
  	newAccident.save({}, (err, success) => {
  		console.log('SAVE?', err)
  		console.log('SAVED', success);
  	});
  })
 }

 //seed database with Toronto Police Services theft data
function seedThefts() {
  const parsedThefts = thefts.map(theft => {
  	return {
		location: {
			type: 'Point',
			coordinates: [parseFloat(theft.Long), parseFloat(theft.Lat)]
		},
		occurrenceYear: theft.Occurrence_Year,
		occurrenceMonth: theft.Occurrence_Month,
		occurrenceDay: theft.Occurrence_Day,
		occurrenceTime: theft.Occurrence_Time,
		bikeType: theft.Bike_Type,
		bikeMake: theft.Bike_Make,
		bikeModel: theft.Bike_Model,
		neighbourhood: theft.Neighbourhood,
		source: 'Toronto Police Services'
  	}
  })

  parsedThefts.forEach(theft => {
  	var newTheft = new Theft(theft);
  	newTheft.save({}, (err, success) => {
  		console.log('SAVE?', err)
  		console.log('SAVED', success);
  	});
  })

 }

//calls seeding functions once database connection is open
db.once("open", () => {
	console.log("connected to the database");
	seedAccidents();
	seedThefts()
});