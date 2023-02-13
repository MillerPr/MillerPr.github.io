function nytBee(){
  var wordArray = [];
  var letterCombos = [];
  var report = [];
  var wordCount = [];
  var reportCount = [];
  var firstLetters = [];
  var wordSet = [];

  // Get the word divs and keep unique list
  var wordNodes = document.querySelectorAll('.sb-anagram');
  wordNodes.forEach((word)=>{wordArray.push(word.innerText);});
  let uniqueWords = [...new Set(wordArray)];

  // letterCombos: create list of first two letters
  uniqueWords.forEach(word=>{letterCombos.push(word.substring(2,0));});
  // wordSet: create A4, R8, etc.
  uniqueWords.forEach(word=>{wordSet.push(word.substring(1,0)+word.length);});
  const count = {};
  for (const element of wordSet) {if (count[element]) {count[element] += 1;} else {count[element] = 1;}}
  for (const [key, val] of Object.entries(count)) {reportCount.push(key+'-'+val);}
  let uniqueCombos = [...new Set(letterCombos)];
  const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
  for(let i=0; i < uniqueCombos.length;i++){report.push(uniqueCombos[i]+' - '+countOccurrences(letterCombos, uniqueCombos[i])+'\r\n');}
  uniqueWords.forEach(word=>{firstLetters.push(word.substring(1,0));});
  let uniqueLetters = [...new Set(firstLetters)];
  for(let i=0; i < uniqueLetters.length;i++){wordCount.push(uniqueLetters[i]+' - '+countOccurrences(firstLetters, uniqueLetters[i])+'\r\n');}
  alert('Word count: '+uniqueWords.length+'\r\n' +wordCount.sort().join('') + '\r\n' + report.sort().join('') + '\r\n' + reportCount.sort().join('\r\n'));
}
