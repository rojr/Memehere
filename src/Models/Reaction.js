function Reaction(thumbnailUrl, linkUrl) {
  this.thumbnailUrl = thumbnailUrl;
  this.linkUrl = linkUrl;

  this.getHtml = function() {
    return '<img src="' + this.thumbnailUrl + '" />';
  };

  this.getElement = function() {
    var div = document.createElement('div');
    div.innerHTML = this.getHtml();

    return div;
  }
};

module.exports = Reaction;
