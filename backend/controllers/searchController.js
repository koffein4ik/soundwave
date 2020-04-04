exports.search = function(request, response) {
    console.log(request.body.searchText);
    response.send({"your request":  request.body.searchText});
};