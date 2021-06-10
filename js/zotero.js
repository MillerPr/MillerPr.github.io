//The Zotero API associates a user or group ID with items in a libary.
//API keys should be configured to allow for the proper access, usually read only.

//RSTI library, associated with bunushu ID
var projectKey = 'mXATI0EaWplAa2ygaGbghKX1';

//bunushu ID
var userID = '1009275';

// mcprosse ID
// var userID = '3125674';

var groupID = '1574360';

//An item from the MCP main library
//var url = 'https://api.zotero.org/users/'+userID+'/items/3ZHZPLPQ?key='+projectKey;

//An item from the RSTI group
var url = 'https://api.zotero.org/groups/'+groupID+'/items/B8RXU4T3?v=3';

//BATHS library
//var url = 'https://api.zotero.org/users/'+userID+'/items/Z3J7F7YW?key=75v2aVQ3gfzUH518mtmT6WA3';
console.log(url);
fetch(url)
.then(
  function(response) {
    if (response.status !== 200) {
      console.log('PROBLEM! Status code is: ' + response.status);
      return;
    }
    response.json().then(function(zot) {
      // console.log(zot);
      let bookTitle = zot.data.title;
      // console.log(bookTitle);
      let itemURL = zot.data.url;
      // console.log(itemURL);
      let citationLink = document.getElementById('citation')
      citationLink.innerText = bookTitle;
      citationLink.href = itemURL;
    });
  });
