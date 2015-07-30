// var Bookshelf = require('bookshelf');
var path = require('path');

///////////////////////////////
//MONGOOSE
// Retrieve
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shortlydb');

  urlSchema = {
    id: Number,
    url: String,
    base_url: String,
    code: String,
    title: String,
    visits: Number,
    created_at: Date,
    updated_at: Date
  };

  userSchema = {
    id: Number,
    username: String,
    password: String,
    created_at: Date,
    updated_at: Date
  };


  exports.Link = mongoose.model('Link', urlSchema, 'url');

  exports.User = mongoose.model('User', userSchema, 'user');

  exports.connection = mongoose.connection;

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

