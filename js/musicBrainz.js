#!/usr/bin/node


const MusicBrainzApi = require('musicbrainz-api').MusicBrainzApi;
const mbApi = new MusicBrainzApi({
  appName: 'my-app',
  appVersion: '0.1.0',
  appContactInfo: 'user@mail.org'
});

var artistName = document.getElementById('artistInput').value;
console.log(artistName);
const result = mbApi.searchArtist({ query: artistName });
console.log(result);
