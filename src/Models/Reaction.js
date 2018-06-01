function Reaction(thumbnailUrl, linkUrl) {
  this.thumbnailUrl = thumbnailUrl;
  this.linkUrl = linkUrl;

  this.getHtml = function() {
    return '<div><img src="' + this.thumbnailUrl + '" /></div>';
  };

  this.getElement = function() {
    var div = document.createElement('div');
    div.innerHTML = this.getHtml();

    return div;
  }
};

module.exports = Reaction;
