function Reaction(thumbnailUrl, linkUrl) {
  this.thumbnailUrl = thumbnailUrl;
  this.linkUrl = linkUrl;

  this.getHtml = function() {
    return '<img src="' + this.thumbnailUrl + '" />';
  };

  this.getElement = function() {
    var div = document.createElement('div'),
          self = this;

    div.innerHTML = this.getHtml();


    div.onclick = function() {
      window.toClipboard(self.linkUrl);
    }

    return div;
  }
};

module.exports = Reaction;
