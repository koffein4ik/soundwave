const databaseService = require("../dao/databaseService");

exports.getGenres = async function() {
    return await databaseService.findAllGenres();
};
