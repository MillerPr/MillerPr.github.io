function getValues() {
  //declare variable from user input
  var artistName = document.getElementById('artistInput').value;
  var albumName = document.getElementById('albumInput').value;
  searchMusic(artistName, albumName);
  return;
}

function searchMusic(artistName, albumName) {
  //conditional check on which input we get from the user.
  //if we get only the artistName, then we use the API call that retrieves all the albums
  //if we get both values, then we display one item only.

  if (albumName !== "") {
    //declare base url for API
    var url = "https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=" + artistName + "&a=" + albumName;
    //declare destination for album art
    var albumDiv = document.getElementById('albumArt');

    //fetch command
    fetch(url)
    .then(
      function(response) {
        if (response.status !== 200) {
          alert('PROBLEM! Status code is: ' + response.status);
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
    } else {
      var url = "https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=" + artistName;
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
              var newDiv = document.createElement("div");
              newDiv.setAttribute('class', 'row');
              var currentAlbum = jsonContent[i].strAlbum;
              newDiv.setAttribute("onclick", "searchMusic('"+artistName+"', '"+currentAlbum+"')");
              document.getElementById('albumList').appendChild(newDiv);
              newDiv.innerText = currentAlbum;
            }
          });
        });
      };
    }


        //Super challenge
        //Use this base to return all albums.
        //Iterate through them all and display them.
        //https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=" + artistName;
