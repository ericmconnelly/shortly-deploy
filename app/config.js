// var Bookshelf = require('bookshelf');
var path = require('path');

///////////////////////////////
//MONGOOSE
// Retrieve
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shortlydb');
var urlSchema;
var userSchema;

mongoose.on('error', console.error.bind(console, 'connection error:'));

mongoose.once('open', function(){
  var Schema = mongoose.Schema;
  // var Link = require('../models/link');

  // var Links = new db.Collection();

  // Links.model = Link;
  urlSchema = new Schema({
    id: Number,
    url: String,
    base_url: String,
    code: String,
    title: String,
    visits: Number,
    created_at: Date,
    updated_at: Date
  });

  userSchema = new Schema({
    id: Number,
    username: String,
    password: String,
    created_at: Date,
    updated_at: Date
  });
});

module.exports = mongoose.connection;

module.exports = function(){
    if(typeof urlSchema !== undefined && typeof userSchema !== undefined ){
        mongoose.connection;
    } else {
        undefined;
    }
}


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

