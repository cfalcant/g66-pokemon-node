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

    knex.select('pokemon.id', 'pokemon.name', 'pokemon.cp', 'pokemon.in_gym','trainers.id AS trainer_id', 'trainers.name AS trainer_name')
        .from('pokemon')
        .join('trainers', 'pokemon.trainer_id', 'trainers.id')
        .where('pokemon.id', req.params.id)
        .then((resultData)=>{
          res.render('info', {properties:resultData})
        })
    },

    edit: function (req, res) {
      res.render('editPokemon')
    },

  }

// DOES WORK!(KINDA)
  // info: function (req, res) {
  //   knex('pokemon')
  //   .where('id', req.params.id)
  //   .then((data)=>{
  //     res.render('info', {properties: data})
  //   })
  // }




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
