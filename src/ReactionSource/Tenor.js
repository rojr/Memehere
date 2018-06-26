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
    "url": "https://api.tenor.com/v1/search?key=CP6AK6Z54CKS&q=" + query,
    "method": "GET"
  }


  $.ajax(settings).done(function(response) {
    if (response.results) {
      for (var i = 0; i < response.results.length; i++) {
        var current = response.results[i].media[0];

        callback(new Reaction(current.tinygif.url, current.gif.url));
      }
    }
  })
};

window.ReactionSources.TenorSource = source;
