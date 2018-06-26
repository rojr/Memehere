function Reaction(thumbnailUrl, linkUrl) {
  this.thumbnailUrl = thumbnailUrl;
  this.linkUrl = linkUrl;

  this.getHtml = function() {
    return '<img src="https://loading.io/spinners/typing/lg.-text-entering-comment-loader.gif"/>';
  };

  this.getElement = function() {
    var div = document.createElement('div'),
          self = this;

    div.innerHTML = this.getHtml();


    div.onclick = function() {
      window.toClipboard(self.linkUrl);
    }

    var imageElement = div.querySelector('img');

    var img = new Image();
    img.onload = function() {
      imageElement.src = this.src;
    }

    img.src = this.thumbnailUrl;

    return div;
  }
};

module.exports = Reaction;
