// You can also require other file
let { remote } = require('electron')
let win = remote.getCurrentWindow()
let searchInput = document.querySelector("#main-search-input");

searchInput.onkeyup = function() {
if (this.value != "" ) {
win.setSize(win.getBounds().width, 712);
search(this.value);
} else {
win.setSize(win.getBounds().width, 144);
}
}

var searchTimeout = null;
var searchResults = document.querySelector('#search-result-box');

function search(query) {
if (searchTimeout != null) {
clearTimeout(searchTimeout);
searchTimeout = null;
}

searchResults.innerHTML = '';

searchTimeout = setTimeout(function() {
  window.ReactionSources.search(searchInput.value);
}, 500)
}

setTimeout(function(){
//  win.setSize(1500, 800, 500)

}, 1500);

let Reaction = require('./Models/Reaction.js');
require('./ReactionSource/ReactionSource.js');
require('./ReactionSource/Giphy.js');

debugger;

window.ReactionSources.start();
