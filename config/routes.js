//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js");
const pokemon = require("../controllers/pokemon.js");
const info = require("../controllers/info.js");
const trainers = require("../controllers/trainers.js");

module.exports = function(app){

  app.get('/', index.main);

  app.get('/pokemon', pokemon.main);

  app.post('/addPokemon', pokemon.addPokemon);

  app.get('/pokemon/info/:id', pokemon.info)

  app.get('/trainers', trainers.main)
}
