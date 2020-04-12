const databaseService = require("../dao/databaseService");

exports.getPlaylistsByUserId = async function(user_id) {
    return await databaseService.getPlaylistsByUserId(user_id);
};
