let knex = require('../db/knex.js');

module.exports = {

  // main: function(req, res, next) {
  //   res.render('index', { title: 'Express' });
  // },

  main: function(req, res, next) {
    req.session.user = [];
    res.redirect('/pokemon')
  },


  }
