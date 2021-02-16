function searchMusic() {
  //declare variable from user input
  var artistName = document.getElementById('artistInput').value;


  //declare base url for API
  var url = "https://www.theaudiodb.com/api/v1/json/1/discography.php?s=" + artistName;

  //declare destination for album art
  //var albumDiv = document.getElementById('albumArt');

  //fetch command
  fetch(url)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('PROBLEM! Status code is: ' + response.status);
        return;
      }
      response.json().then(function(data) {
        console.log(data);
        let jsonContent = data.album;
        console.log(jsonContent);
        for (i in jsonContent) {
          var discographyDiv = document.getElementById('discography');
          var albumYearDiv = document.createElement('span');
          albumYearDiv.setAttribute('class', 'h4');
          albumYearDiv.innerText = jsonContent[i].intYearReleased;
          var albumNameDiv = document.createElement('span');
          albumNameDiv.setAttribute('class', 'h4');
          albumNameDiv.innerText = jsonContent[i].strAlbum;
          discographyDiv.appendChild(albumYearDiv);
          discographyDiv.appendChild(albumNameDiv);
        }
      });
    });
  }


  //Super challenge
  //Use this base to return all albums.
  //Iterate through them all and display them.
  //https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=" + artistName;
