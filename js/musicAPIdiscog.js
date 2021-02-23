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
        for (i=0; i <= jsonContent.length; i++) {
          var discographyDiv = document.getElementById('discography');
          var newRow = document.createElement('div');
          newRow.setAttribute('class', 'row');
          newRow.setAttribute('id', 'newRow_'+i);
          discographyDiv.appendChild(newRow);
          var newYearCol = document.createElement('div');
          newYearCol.setAttribute('class', 'col-sm-3');
          newYearCol.innerText = jsonContent[i].intYearReleased;
          newRow.appendChild(newYearCol);
          var newAlbumCol = document.createElement('div')
          newAlbumCol.setAttribute('class', 'col');
          newAlbumCol.innerText = jsonContent[i].strAlbum;
          newRow.appendChild(newAlbumCol);
        }
      });
    });
  }
