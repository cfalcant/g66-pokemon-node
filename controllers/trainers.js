let knex = require('../db/knex.js');

module.exports = {
  main: function(req, res) {
    knex('trainers')
    .then((trainersData)=>{
      res.render('trainers', {trainers: trainersData})
    })
  },

}
