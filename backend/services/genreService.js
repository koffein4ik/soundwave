const databaseService = require("../dao/databaseService");

exports.getGenres = async function() {
    return await databaseService.findAllGenres();
};

exports.getSongsByGenreId = async function(id) {
  return await databaseService.getSongsByGenreId(id);
};
