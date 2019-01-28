const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccidentSchema = new Schema(
	{
	id: Number,
	location: {
		type: {
			type: String,
			enum: ['Point'],
			required: true
		},
		coordinates: {
			type: [Number],
			required: true
		}
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
	neighbourhood: String
	});

const TheftSchema = new Schema(
	{
	id: Number,
	location: {
		type: {
			type: String,
			enum: ['Point'],
			required: true
		},
		coordinates: {
			type: [Number],
			required: true
		}
	},
	occurrenceYear: Number,
	occurrenceMonth: Number,
	occurrenceDay: Number,
	occurrenceTime: String,
	bikeMake: String,
	bikeModel: String,
	neighbourhood: String
	});


var Accident = mongoose.model('Accident', AccidentSchema);
var Theft = mongoose.model('Theft', TheftSchema);
var schemas = {'Accident': Accident, 'Theft': Theft}
module.exports = schemas