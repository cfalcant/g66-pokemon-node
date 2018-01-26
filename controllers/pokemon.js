let knex = require('../db/knex.js');

module.exports = {

  main: function(req, res, next) {
    knex('pokemon')
    .then((results)=>{
      res.render('pokemon', {pokemon: results})
    })
  },

  addPokemon: function (req, res) {
    knex('pokemon')
    .insert(req.body)
    .then(()=>{
      res.redirect('/');
    })
  },

  info: function (req, res) {
    
  }




  // addPokemon: function (req, res) {
  //   knex('pokemon')
  //   .insert(req.body, '*')
  //   .then((pokemondata)=>{
  //     req.session.user = user[0];
  //     req.session.save(()=>{
  //       res.redirect('/')
  //     })
  //   })
  // }

  };
