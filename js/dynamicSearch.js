// A simple proof-of-concept to demonstrate how to create a dynamically generated search
// input interface based on properties present in the XML.
// Not all properties make sense in this approach.
// But this could be useful for text string searches.

var link = "https://ochre.lib.uchicago.edu/ochre?uuid=ff48d967-f69c-48e6-aed3-4e03e52ed51d";

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', loadXML);
})

function loadXML(){
  XMLrequest(link);
  console.log('loadXML -- OK');
};

function XMLrequest(link) {
  var connect = new XMLHttpRequest();
  connect.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      searchGrid(this.responseXML);
    }
  };
  connect.open("GET", link, true);
  connect.send();
  console.log('XMLrequest -- OK');
};

var baseXPath = '/ino:response/xq:result/ochre'

function nsResolver(prefix) {
  var ns = {
    'ino' : 'http://namespaces.softwareag.com/tamino/response2',
    'xq' : 'http://namespaces.softwareag.com/tamino/XQuery/result'
  };
  return ns[prefix] || null;
}

function getXPathAll(sourceXML, XPath) {
  return sourceXML.evaluate(XPath, sourceXML, nsResolver, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
}

function searchGrid(sourceXML) {
  console.log(sourceXML)
  $('#projectTitle').html('OCHRE')
  $('#setTitle').html(getXPathAll(sourceXML, baseXPath + '/set/identification/label').snapshotItem(0).textContent)
  $('#setDescription').html(getXPathAll(sourceXML, baseXPath + '/set/description').snapshotItem(0).textContent)

  // for the first item
  // iterate over the properties node
  // get the property variable labels
  // create a label for an input for each property
  // creat an input box for each label
  // append to div#propertySearch

  let propertyLabels = getXPathAll(sourceXML, baseXPath + '/set/items/*/properties');

  for (i=0; i < propertyLabels.snapshotLength; i++) {
    var label = document.createElement('label');
    let propLabel = getXPathAll(sourceXML, baseXPath + '/set/items/*/properties/property/label').snapshotItem(i).textContent;
    console.log('prop label: '+propLabel)
    label.setAttribute('for', propLabel)
    label.id="label_"+propLabel
    label.innerHTML = propLabel
    document.getElementById('propertySearch').appendChild(label);
    var input = document.createElement('input');
    input.type='text';
    input.id=propLabel;
    input.name=propLabel
    input.size='10';
    document.getElementById('label_'+propLabel).appendChild(input);
  }
  let items = getXPathAll(sourceXML, baseXPath + '/set/items/*');
}
