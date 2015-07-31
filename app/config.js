// exports.mongoose.connect('mongodb://MongoLab-r:f3BWB.ORBBLTrl..oUe5h4.NZvcet_bwG7lk5hmbRjI-@ds036178.mongolab.com:36178/MongoLab-r/shortlydb');


var mongoose = require('mongoose');
// var path = require('path');

if (process.env.NODE_ENV === 'production') {
  console.log("USING PROD DB");
  mongoose.connect('mongodb://MongoLab-r:f3BWB.ORBBLTrl..oUe5h4.NZvcet_bwG7lk5hmbRjI-@ds036178.mongolab.com:36178/MongoLab-r/shortlydb');
} else {
  console.log("USING TEST DB");
  mongoose.connect('mongodb://localhost/test');
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {
  console.log('Connected to mongo database');
});

db.urlSchema = mongoose.Schema({
  url: String,
  base_url: String,
  code: String,
  title: String,
  visits: {type: Number, default: 0},
  timestamp: {type: Date, default: Date.now}
});

db.userSchema = mongoose.Schema({
  username: {type: String, unique: true, required: true},
  password: {type: String, maxlength: 100},
  timestamp: {type: Date, default: Date.now}
});


module.exports = db;
