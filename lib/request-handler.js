var request = require('request');
var crypto = require('crypto');
var bcrypt = require('bcrypt-nodejs');
var util = require('../lib/utility');
var Promise = require('bluebird');

var db = require('../app/config');
var User = require('../app/models/user');
var Link = require('../app/models/link');
var Users = require('../app/collections/users');
var Links = require('../app/collections/links');

exports.renderIndex = function(req, res) {
  res.render('index');
};

exports.signupUserForm = function(req, res) {
  res.render('signup');
};

exports.loginUserForm = function(req, res) {
  res.render('login');
};

exports.logoutUser = function(req, res) {
  req.session.destroy(function(){
    res.redirect('/login');
  });
};

exports.fetchLinks = function(req, res) {
  Links.reset().fetch().then(function(links) {
    res.send(200, links.models);
  });
};

exports.saveLink = function(req, res) {
  var uri = req.body.url;

  if (!util.isValidUrl(uri)) {
    console.log('Not a valid url: ', uri);
    return res.send(404);
  }

  new Link({ url: uri }).fetch().then(function(found) {
    if (found) {
      res.send(200, found.attributes);
    } else {
      util.getUrlTitle(uri, function(err, title) {
        if (err) {
          console.log('Error reading URL heading: ', err);
          return res.send(404);
        }

        var link = new Link({
          url: uri,
          title: title,
          base_url: req.headers.origin
        });

        link.save().then(function(newLink) {
          Links.add(newLink);
          res.send(200, newLink);
        });
      });
    }
  });
};

exports.loginUser = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  db.User.find({ username: username }).then(function(result, err){
    if(err){ console.log('Error Finding User: ', err); }
    if(result.length === 0){
        console.log('User Not Found!')
        res.redirect('/login');
    }else{
        bcrypt.compare(password, result[0].password, function(err, isMatch) {
          if(isMatch){
            console.log('Password Matched!')
            util.createSession(req, res, result[0]);
          }else{
            console.log('Wrong Password!');
            res.redirect('/login');
          }
        });
    }
  })
};



exports.signupUser = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  db.User.find({ username: username }).then(function(result, err){
    if(err){ console.log('error finding user: ', err); }
    if(result.length === 0){
      util.hashPassword(password, function(err, hash){
        if(err){ console.log('Error hashing password: ', err); }
        var user = new db.User({
          username: username,
          password: hash
        });
        user.save().then(function(newUser){
          console.log('new user created: ', newUser.username );
          res.redirect('/');
        });

      });
    }else{
      console.log('Account already exists');
      res.redirect('/signup');
    }
  })
};


  // new User({ username: username })
  //   .fetch()
  //   .then(function(user) {
  //     if (!user) {
  //       var newUser = new User({
  //         username: username,
  //         password: password
  //       });
  //       newUser.save()
  //         .then(function(newUser) {
  //           util.createSession(req, res, newUser);
  //           Users.add(newUser);
  //         });
  //     } else {
  //       console.log('Account already exists');
  //       res.redirect('/signup');
  //     }
  //   });
// };

exports.navToLink = function(req, res) {
  // new Link({ code: req.params[0] }).fetch().then(function(link) {
  //   if (!link) {
  //     res.redirect('/');
  //   } else {
  //     link.set({ visits: link.get('visits') + 1 })
  //       .save()
  //       .then(function() {
  //         return res.redirect(link.get('url'));
  //       });
  //   }
  // });
};