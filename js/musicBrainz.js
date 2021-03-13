function searchMusic() {
  //Update to use MusicBrainz API https://musicbrainz.org/doc/Beginners_Guide
  //declare variable from user input
  var artistName = document.getElementById('artistInput').value;
  //var albumName = document.getElementById('albumInput').value;

  //declare base url for API
  var urlArtist = "https://musicbrainz.org/ws/2/artist/?query="+artistName;
  //var urlAlbum = "https://musicbrainz.org/ws/2/work/"+albumName;

  fetch(urlArtist)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('PROBLEM! Status code is: ' + response.status);
        return;
      }
      response.json().then(function(data) {
        console.log(data);
        /* let jsonContent = data.album[0];
        console.log(jsonContent);
        albumDiv.src = jsonContent.strAlbumThumb;
        document.getElementById('albumYear').innerText = jsonContent.intYearReleased;
        document.getElementById('albumGenre').innerText = jsonContent.strGenre;
        document.getElementById('albumDesc').innerText = jsonContent.strDescriptionEN; */

      });
    });
  }
