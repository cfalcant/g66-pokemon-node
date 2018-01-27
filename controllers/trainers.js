let knex = require('../db/knex.js');

module.exports = {
  main: function(req, res) {
    knex('trainers')
    .then((trainersData)=>{
      res.render('trainers', {trainers: trainersData})
    })
  },

  info: function (req, res) {
    knex('trainers')
        .select('trainers.name', 'pokemon.name AS pokemon_name')
        .join('pokemon', 'trainers.id', 'pokemon.trainer_id')
        .where('trainers.id', req.params.id)
        .then((pokemonAssigned)=>{
          res.render('trainersinfo', {trainer:pokemonAssigned})
        })
  },

}
