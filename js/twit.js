function getHashTag(){
  var userInput = document.getElementById('searchTerm').value;
  var hashURL = "https://api.twitter.com/1.1/search/tweets.json?q=%23"+userInput+"&result_type=recent"
  console.log(hashURL);

}
