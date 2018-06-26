let storage = require('electron-json-storage');

let config = {
  "GiphyKey":'',
  'ImgurClientID':'',
  'ImgurSecret':'',
  "TenorSecret":'CP6AK6Z54CKS'
};

storage.getMany(['GiphyKey', 'ImgurClientID', 'ImgurSecret', 'TenorSecret'], function(error, data) {
  if (error) return;

  window.Config = data;
})

module.exports = config;
