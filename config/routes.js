//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js");
const pokemon = require("../controllers/pokemon.js");
const info = require("../controllers/info.js");
const trainers = require("../controllers/trainers.js");
const gym = require("../controllers/gym.js");

module.exports = function(app){

  app.get('/', index.main);

  app.get('/pokemon', pokemon.main);

  app.post('/addPokemon', pokemon.addPokemon);

  app.get('/pokemon/info/:id', pokemon.info)

  app.get('/pokemon/edit/:id', pokemon.edit)

  app.get('/trainers', trainers.main)

  app.get('/trainers/info/:id', trainers.info)

  app.get('/gym', gym.index)
}
