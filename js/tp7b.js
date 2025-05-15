document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', loadXML);
})

//Define parent element
var parentElement = document.getElementById('ochreTableBody');
//Define API url
// 6f18e3a7-a396-46d9-85cb-92674c24cfc0
// 50f7b9a5-329a-49ab-85e2-f8fb4ee6e867
var url = "https://ochre.lib.uchicago.edu/ochre?uuid=6f18e3a7-a396-46d9-85cb-92674c24cfc0";
// var url = 'media/sample.xml';

// First function, invoked with event listener
// Everything else happens in the scope of this function
function loadXML() {
  fetch(url)
  .then(response => response.text())
  .then(data =>
    parseData(data)
  )
  .catch(error => {
    console.error('Error loading XML file:', error);
  })
};

// NOTE how this is different from the XHR approach
function parseData(xmlData){
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlData, 'application/xml');
  createHeaders(xmlDoc),
  listProps(xmlDoc);
};

function createHeaders(sourceXML){
  document.getElementById('projectTitle').innerText = sourceXML.getElementsByTagName('metadata')[0].children[1].innerHTML;
  document.getElementById('itemTitle').innerText = sourceXML.getElementsByTagName('spatialUnit')[0].children[3].children[0].children[0].children[0].innerHTML;
  document.getElementById('itemDescription').innerText = sourceXML.getElementsByTagName('spatialUnit')[0].children[4].children[0].children[0].innerHTML
  var licenseText = document.getElementById('license');
  licenseText.innerText = sourceXML.getElementsByTagName('availability')[0].children[0].innerHTML;
}

function listProps(sourceXML){
  var baseXPath = '/result/ochre/spatialUnit/observations/observation/properties/'
  // sourceXML.evaluate('//properties/property', sourceXML, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null)
  console.log(sourceXML);
  var allProps = sourceXML.getElementsByTagName('properties');
  // var propList = sourceXML.getElementsByTagName('property');
  showProp()
  for (i=0; i < propList.length; i++) {
    //create new ul for each property
    let newUL = document.createElement("ul");

    document.getElementById('itemLists').appendChild(newUL);
  };
}

function showProp(){

  let newLI = document.createElement("li");
  newLI.innerHTML = propList[i].children[0].children[0].children[0].innerHTML + ": " + propList[i].children[1].innerHTML;
  //populate the cells in the row
  document.getElementById('itemDetails').appendChild(newLI);
}
