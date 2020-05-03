const databaseService = require("../dao/databaseService");

exports.getRecommendationPlaylist = async function(user_id) {
    return await databaseService.getRecommendation(user_id);
};

