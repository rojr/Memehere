let storage = require('electron-json-storage');
storage.setDataPath(process.env.HOME);


let config = {
  "GiphyKey":'',
  'ImgurClientID':'',
  'ImgurSecret':''
};

storage.getMany(['GiphyKey', 'ImgurClientID', 'ImgurSecret'], function(error, data) {
  if (error) return;

  window.Config = data;
})

module.exports = config;
