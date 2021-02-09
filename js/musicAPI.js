function searchMusic() {
  //declare variable from user input
  var artistName = document.getElementById('artistInput').value;
  var albumName = document.getElementById('albumInput').value;

  //declare base url for API
  var url = "https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=" + artistName + "&a=" + albumName;

  //declare destination for album art
  var albumDiv = document.getElementById('albumArt');

  //fetch command
  //check for bad response
  //save the response to a variable
  //grab album art URL
  //grab album year
  //grab album genre
  //grab album description
  fetch(url)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('PROBLEM! Status code is: ' + response.status);
        return;
      }
      response.json().then(function(data) {
        //console.log(data);
        let jsonContent = data.album[0];
        console.log(jsonContent);
        albumDiv.src = jsonContent.strAlbumThumb;
        document.getElementById('albumYear').innerText = jsonContent.intYearReleased;
        document.getElementById('albumGenre').innerText = jsonContent.strGenre;
        document.getElementById('albumDesc').innerText = jsonContent.strDescriptionEN;

      });
    });
  }


  //Super challenge
  //Use this base to return all albums.
  //Iterate through them all and display them.
  //https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=" + artistName;
