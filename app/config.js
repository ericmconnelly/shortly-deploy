// var Bookshelf = require('bookshelf');
var path = require('path');

///////////////////////////////
//MONGOOSE
// Retrieve
exports.mongoose = require('mongoose');
var Schema = exports.mongoose.Schema;
// var ObjectId = Schema.ObjectId;
exports.mongoose.connect('mongodb://MongoLab-r:f3BWB.ORBBLTrl..oUe5h4.NZvcet_bwG7lk5hmbRjI-@ds036178.mongolab.com:36178/MongoLab-r/shortlydb');


var db = exports.mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {
  console.log('connection opened');
});

exports.urlSchema = new Schema({
  url: String,
  base_url: String,
  code: String,
  title: String,
  visits: Number,
  date: {type: Date, default: Date.now}
});

exports.userSchema = new Schema({
  username: String,
  password: String,
  date: {type: Date, default: Date.now}
});


// exports.urlsModel = mongoose.model('Link', exports.urlSchema, 'urls');
// exports.usersModel = mongoose.model('User', exports.userSchema, 'users');

// exports.connection = mongoose.connection;

///////////////////////////////


// mongoose.connection.db.listCollections({name: 'mycollectionname'})
//     .next(function(err, collinfo) {
//         if (collinfo) {
//             // The collection exists
//         }
//     });







// var db = Bookshelf.initialize({
//   client: 'sqlite3',
//   connection: {
//     host: '127.0.0.1',
//     user: 'your_database_user',
//     password: 'password',
//     database: 'shortlydb',
//     charset: 'utf8',
//     filename: path.join(__dirname, '../db/shortly.sqlite')
//   }
// });

// db.knex.schema.hasTable('urls').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('urls', function (link) {
//       link.increments('id').primary();
//       link.string('url', 255);
//       link.string('base_url', 255);
//       link.string('code', 100);
//       link.string('title', 255);
//       link.integer('visits');
//       link.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

