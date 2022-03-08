// Crate a page that searches the MusicBrainz API.
// See MusicBrainz API https://musicbrainz.org/doc/MusicBrainz_API
// At least at first, don't use the Node.js documentation.

// HTML DETAILS
// Your HTML page should include at least:
  // A form with an input field
  // Note that we need to prevent the default behavior of the form.
  // We want to run our query if the user hits enter/return.
/* <form id="musicForm" onsubmit="event.preventDefault()">
  <div class="row">
    <div class="col">
      <input id="artistInput" type="text" class="form-control" placeholder="Artist name">
    </div>
  </div>
</form> */
  // A button to submit the input.
  // An empty div that will hold the list of artists from the first query.
  // A div containing a basic table structure including table head, all except for the rows in the table body.
  // Use a Bootstrap class to hide the table until we need it later.
  // An empty div that will hold the name of the artist searched.


// JAVASCRIPT DETAILS
// Add event listeners for both button and form field.

// Just in case we get throttled, create a header to pass to the API.


// We need a helper function that will clear out existing results.
// This is tricky, so here it is.
// Make sure you understand how it works.
function removeResults(parentDiv) {
  while (parentDiv.firstChild) {
    parentDiv.removeChild(parentDiv.firstChild);
  }
};

// Call removeResults() to clear out previous results and hide table

// Get Input from user input

// Save API url to variable, including user input string
  // For example: var urlArtist = "https://musicbrainz.org/ws/2/artist/?query=" + artistName + "&fmt=json";
  // Optional API arguments:
  /* inc=aliases
  %2Bartist-credits
  %2Blabels
  %2Bdiscids
  %2Brecordings */

// Perform the fetch()
  // Fetch a JSON document using the API url
  // Check that the response from the API is 200
  // Pass the JSON response to the next function
    // This is a little tricky, so here it is:
    // response.json().then(data => searchResults(data));
    // We need to write the function searchResults(data);

// Write a function to display a list of search results as anchor links
  // Identify the part of the JSON response to work with.
    // Here is what that looks like: var artists = data.artists;
  // The anchor link href is a little tricky, so here it is:
    // newAnchor.href = `javascript:displayAlbums('${artists[i].id}', '${artists[i].name}')`;
  // We need to write the function displayAlbums(id, artistName).

// Write a function to display the albums by artist.
  // Display as a table with two columns.
  // Each album name is an anchor link that clicks through to the MB website
  // This function queries 'release-group'. If that entity changes,
    // so must much of the rest of the function to account for the different JSON structure.
    // If we do not set &limit, the default is 25.
  // Define the API URL including the following arguments:
    // ?artist=&{id}
    // &limit=50
    // &fmt=json
  // Add the artist name to a header element at the top of the page.
  // Write the fetch() to get the API URL you just defined.
    // Test for 200 again.
    // Pass the JSON response to the next function
    // Again we need to identify the part of the JSON file we want. Again it's tricky...
      // var releases = data["release-groups"];
      // We use bracket notation in this example because release-group is a non-standard entity name.
    // Clear out the existing list of results and display the <table> so we can build it.
    // Iterate through album releases and build a table with two columns: release date and title.
    // The second column should include an anchor link that click through to the MB site.

// TEST, TEST, TEST!!
// Have fun!!
// Major kudos to anyone who can sort the albums by release date!
