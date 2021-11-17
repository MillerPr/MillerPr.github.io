function OCapi() {
  var parentDiv = document.getElementById('ocDiv');
  removeResults(parentDiv);
  var searchTerm = document.getElementById('searchTerm').value;
  var connect = new XMLHttpRequest();
  var url = "https://opencontext.org/subjects-search/?q=" + searchTerm;

  connect.open('GET', url);
  connect.setRequestHeader('Accept', 'application/json');

  connect.onload = function () {
    console.log(connect.response);
    var ocData = JSON.parse(this.response);
    console.log(ocData);
    console.log(ocData.features);
    var features = ocData.features;
    for (i in features) {
      if (features[i].label) {
      //basic function
      var newDiv = document.createElement("div");
      newDiv.setAttribute('class', 'row h4');
      document.getElementById("ocDiv").appendChild(newDiv);
      newDiv.innerText = features[i].label;
      }
    }
  };
  connect.send();

  //SUPER CHALLENGE
  //Display links to the Wikipedia HTML pages as results.
  //Use the pageid property in the JSON file.
  //The base URL for loading Wikipedia pages by pageid is the following:
  //https://en.wikipedia.org/?curid=
  //Add the pageid to the end of the URL.
}

/* function OCapi() {
  var searchTerm = document.getElementById('searchTerm').value;
  if (searchTerm !== "") {
    //declare base url for API
    var url = "https://opencontext.org/subjects-search/?q=" + searchTerm;
    console.log(url);
    //declare destination for album art
    var albumDiv = document.getElementById('wiki');

    //fetch command
    fetch(url)
      .then(
        function (response) {
          if (response.status !== 200) {
            alert('PROBLEM! Status code is: ' + response.status);
            return;
          }
          response.json().then(function (data) {
            console.log(data);
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
        function (response) {
          if (response.status !== 200) {
            console.log('PROBLEM! Status code is: ' + response.status);
            return;
          }
          response.json().then(function (data) {
            console.log(data);
            let jsonContent = data.album;
            console.log(jsonContent);
            for (i in jsonContent) {
              var newDiv = document.createElement("div");
              newDiv.setAttribute('class', 'row');
              var currentAlbum = jsonContent[i].strAlbum;
              newDiv.setAttribute("onclick", "searchMusic('" + artistName + "', '" + currentAlbum + "')");
              document.getElementById('albumList').appendChild(newDiv);
              newDiv.innerText = currentAlbum;
            }
          });
        });
  };
} */

//This function will remove the previous results.
function removeResults(parentDiv){
  while (parentDiv.firstChild) {
    parentDiv.removeChild(parentDiv.firstChild);
  }
}

