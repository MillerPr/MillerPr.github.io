function loadXMLDoc() {

  const xmlFilePath = 'media/rsti.xml';

  fetch(xmlFilePath)
  .then(response => response.text())
  .then(data =>
    parseData(data)
  )
  .catch(error => {
    console.error('Error loading XML file:', error);
  })
};

function parseData(xmlData){
  clearOutput()
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlData, 'application/xml');
  outputResults(xmlDoc)
}

function outputResults(xmlDoc){
  objectData = xmlDoc.getElementsByTagName("property");
  for (i = 0; i < objectData.length; i++) {
    if (objectData[i].children[0].attributes[0].nodeValue==="1db231a7-a055-d5c6-08a8-b06022c8daec") {
      let newDiv = document.createElement("div");
      newDiv.className = "d-block";
      newDiv.innerHTML = objectData[i].children[1].innerHTML;
      document.getElementById("output").appendChild(newDiv);
    };
  };
}

function clearOutput(){
  var parentDiv = document.getElementById("output");
  while (parentDiv.firstChild) {
    parentDiv.removeChild(parentDiv.firstChild);
  }
  console.log("cleared");
}
