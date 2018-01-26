let knex = require('../db/knex.js');

module.exports = {

  main: function(req, res, next) {
    res.render('pokemon')
  },

  addPokemon: function (req, res) {
      res.render('newPokemon')
  },


  // addedPokemon: function (req, res) {
  //   knex('pokemon')
  //   .insert(req.body, '*')
  //   .then((user)=>{
  //     req.session.user = user[0];
  //     req.session.save(()=>{
  //       res.redirect('/')
  //     })
  //   })
  // }

  };
