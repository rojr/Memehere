let Reaction = require('../Models/Reaction.js');

var source = function() {

};

source.prototype = new window.ReactionSources.ReactionSource();

source.prototype.initialise = function() {

};

source.prototype.returnReactionsForQuery = function(query, callback) {
  var req = new XMLHttpRequest();

  req.onload = function(r)  {
    if (this.responseText) {

      var response = JSON.parse(this.responseText);
      for (var i = 0; i < response.data.length; i++) {
        var iResponse = response.data[i].images;

        callback(new Reaction(iResponse.preview_gif.url, iResponse.original.url));
      }
    }
  }

  //TODO refactor this to load key from settings file
  req.open("GET", "http://api.giphy.com/v1/gifs/search?api_key=" + window.Config.GiphyKey + "&q=" + query);
  req.send();
};

window.ReactionSources.GiphySource = source;
