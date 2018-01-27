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

    knex.select('pokemon.id', 'pokemon.name', 'pokemon.cp', 'pokemon.in_gym', 'trainers.name AS trainer_name')
        .from('pokemon')
        .join('trainers', 'pokemon.trainer_id', 'trainers.id')
        .where('pokemon.id', req.params.id)
        .then((resultData)=>{
          res.render('info', {properties:resultData})
        })
    }


    // knex.select('pokemon.id', 'pokemon.name', 'pokemon.cp', 'pokemon.in_gym', 'trainers.name AS trainer_name')
    //     .from('pokemon')
    //     .join('trainers', 'pokemon.trainer_id', 'trainers.id')
    //     .where('pokemon.id', req.params.id)
    //     .then((resultData)=>{
    //       res.render('info', {properties:resultData})
    //     })
    // }


    // knex.select('trainers.name','pokemon.id', 'pokemon.name', 'pokemon.cp', 'pokemon.in_gym')
    //     .from('trainers')
    //     .innerJoin('pokemon','trainers.id','pokemon.trainer_id')
    //     .where('pokemon.id', req.params.id)
    //     .then((user)=>{
    //       req.session.user = user[0];
    //       req.session.save(()=>{
    //           res.render('info', {properties:data, user:req.session.user.name})
    //       })
    // })
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
