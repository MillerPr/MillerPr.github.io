function wikiAPI() {

var searchTerm = document.getElementById('searchTerm').value;
var connect = new XMLHttpRequest();
var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" + searchTerm;

connect.open('GET', url);

connect.onload = function () {
  var wikiObject = JSON.parse(this.response);
  //console.log(wikiObject);
  console.log(wikiObject.query.pages);
  var pages = wikiObject.query.pages;
  for (i in pages) {
    //basic function
    /* var newDiv = document.createElement("div");
    newDiv.setAttribute('class', 'row h4');
    document.getElementById("wiki").appendChild(newDiv);
    newDiv.innerText = pages[i].title; */

    //super challenge
    var pageURL = "https://en.wikipedia.org/?curid="
    var newAnchor = document.createElement("a");
    newAnchor.setAttribute('href', pageURL+pages[i].pageid);
    newAnchor.setAttribute('class', 'd-block');
    newAnchor.innerText = pages[i].title;
    document.getElementById("wiki").appendChild(newAnchor);
  };
}
connect.send();

//SUPER CHALLENGE
  //Display links to the Wikipedia HTML pages as results.
  //Use the pageid property in the JSON file.
  //The base URL for loading Wikipedia pages by pageid is the following:
    //https://en.wikipedia.org/?curid=
    //Add the pageid to the end of the URL.
}
