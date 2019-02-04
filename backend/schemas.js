const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccidentSchema = new Schema(
	{
	location: {
		type: { type: String },
		coordinates: [Number]
	},
	date: Date,
	year: Number,
	time: Number,
	hour: Number,
	street1: String,
	street2: String,
	visibility: String,
	light: String,
	roadConditions: String,
	injuryType: String,
	neighbourhood: String,
	source: String
	});

AccidentSchema.index({"location": "2dsphere"});

const TheftSchema = new Schema(
	{
	id: Number,
	location: {
		type: { type: String },
		coordinates: [Number]
	},
	occurrenceYear: Number,
	occurrenceMonth: Number,
	occurrenceDay: Number,
	occurrenceTime: String,
	bikeType: String,
	bikeMake: String,
	bikeModel: String,
	neighbourhood: String,
	source: String 
	});

TheftSchema.index({"location": "2dsphere"});


var Accident = mongoose.model('Accident', AccidentSchema);
var Theft = mongoose.model('Theft', TheftSchema);
var schemas = {'Accident': Accident, 'Theft': Theft}
module.exports = schemas