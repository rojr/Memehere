window.ReactionSources = {};
window.ReactionSources.sources = [];

var source = function() {

};

source.prototype.initialise = function() {};

source.prototype.returnReactionsForQuery = function(query, response) {};

window.ReactionSources.ReactionSource = source;

window.ReactionSources.start = function() {
  window.ReactionSources.sources.push(new window.ReactionSources.GiphySource());
}

window.ReactionSources.pushReactionToTarget = function(target, reaction) {
  target.appendChild(reaction.getElement());
}

window.ReactionSources.search = function (query) {
  for (var i = 0; i < window.ReactionSources.sources.length; i++) {
    window.ReactionSources.sources[i].returnReactionsForQuery(query, function(reactions) {
      for (var j = 0; j < reactions.length; j++) {
        //TODO betterify this
        window.ReactionSources.pushReactionToTarget(document.querySelector('#search-result-box'),reactions[j]);
      }
    });
  }
}
