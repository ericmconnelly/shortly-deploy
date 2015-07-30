// NOTE: this file is not needed when using MongoDB
var mongoose = require('../config');
mongoose.on('error', console.error.bind(console, 'connection error:'));

mongoose.once('opeh', function(){
	var Schema = mongoose.Schema;
	// var Link = require('../models/link');

	// var Links = new db.Collection();

	// Links.model = Link;

	var urlSchema = new Schema({
	  id: Number,
	  url: String,
	  base_url: String,
	  code: String,
	  title: String,
	  visits: Number,
	  created_at: Date,
	  updated_at: Date
	});


});


module.exports = mongoose.model('Url', urlSchema);
