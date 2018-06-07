let Reaction = require('../Models/Reaction.js');

var source = function() {

};

source.prototype = new window.ReactionSources.ReactionSource();

source.prototype.initialise = function() {

};

source.prototype.returnReactionsForQuery = function(query, callback) {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.imgur.com/3/gallery/search/top/all/?q_type=gif&q_all=" + query,
    "method": "GET",
    "headers": {
      "Authorization": "Client-ID " + window.Config.ImgurClientID
    }
  }


  $.ajax(settings).done(function(response) {
    if (response.success) {
      for (var i = 0; i < response.data.length; i++) {
        var current = response.data[i];

        callback(new Reaction(current.link, current.link));
      }
    }
  })
};

window.ReactionSources.ImgurSource = source;
