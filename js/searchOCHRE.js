function searchProject() {
  document.getElementById('xqueryOutput').innerHTML = "";
  var searchTerm = document.getElementById('searchProject').value;
  var url = "https://ochre.lib.uchicago.edu/ochre?&xquery=for%20$q%20in%20input()/ochre[@uuidBelongsTo=%2746ccab46-9c3f-4448-8476-2bf18236791e%27]/* where $q[identification/label[matches(text(),'" + searchTerm + "', 'i')]] return <apiResults><item>{$q/@uuid}%20{$q/identification/label}%20{$q/description}</item></apiResults>";

  //var url = "http://ochre.lib.uchicago.edu/ochre?&xquery=for%20$q%20in%20input()/ochre[@uuidBelongsTo=%2746ccab46-9c3f-4448-8476-2bf18236791e%27]/*%20return%20<apiResults>{for%20$s%20in%20$q[identification/label[matches(text(),'" + searchTerm + "', 'i')]]%20return%20%3Citem%3E%20{$s/@uuid}%20{$s/identification/label}%20{$s/description}%3C/item%3E}</apiResults>";
  //var url = "https://ochre.lib.uchicago.edu/ochre?&xquery=for%20$q%20in%20input()/ochre[@belongsTo=%27RSTI%27]/*%20return%20for%20$s%20in%20$q[identification/label[matches(text(),'" + searchTerm + "', 'i')]]%20return%20%3Citem%3E%20{$s/@uuid}%20{$s/identification/label}%20{$s/description}%3C/item%3E";
  //var url = "https://ochre.lib.uchicago.edu/ochre?&xquery=for%20$q%20in%20input()/ochre[@uuid='ca126815-a753-4794-9277-cbb100942cc8']/set/items%20return%20<apiResults>%20{%20for%20$s%20in%20$q/spatialUnit[description[matches(text(),'" + searchTerm + "', 'i')]]%20return%20<item>%20{$s/@uuid}%20{$s/identification/label}%20{$s/description}</item>%20}%20</apiResults>"
  //var url = "http://ochre.lib.uchicago.edu/ochre?&xquery=for%20$q%20in%20input()/ochre[@uuid=%2746ccab46-9c3f-4448-8476-2bf18236791e%27]/spatialUnit%20return%20for%20$s%20in%20$q[identification/label[matches(text(),'" + searchTerm + "', 'i')]]%20return%20%3Citem%3E%20{$s/@uuid}%20{$s/identification/label}%20{$s/description}%3C/item%3E";
  return fetch(url)
  .then(response => response.text())
  .then(data =>{
    console.log(data); //string
    //document.getElementById('output').textContent = data;
    let parser = new DOMParser();
    let xml = parser.parseFromString(data, "application/xml");
    listResults_03(xml);
  });
};

function searchDescription() {
  document.getElementById('xqueryOutput').innerHTML = "";
  var searchTerm = document.getElementById('searchDesc').value;
  var url = "https://ochre.lib.uchicago.edu/ochre?&xquery=for%20$q%20in%20input()/ochre[@uuid='ca126815-a753-4794-9277-cbb100942cc8']/set/items%20return%20<apiResults>%20{%20for%20$s%20in%20$q/spatialUnit[description[matches(text(),'" + searchTerm + "', 'i')]]%20return%20<item>%20{$s/@uuid}%20{$s/identification/label}%20{$s/description}</item>%20}%20</apiResults>"
  return fetch(url)
  .then(response => response.text())
  .then(data =>{
    console.log(data); //string
    //document.getElementById('output').textContent = data;
    let parser = new DOMParser();
    let xml = parser.parseFromString(data, "application/xml");
    listResults_02(xml);
  });
};

function createXquery() {
  document.getElementById('xqueryOutput').innerHTML = "";
  var searchTerm = document.getElementById('searchTerm').value;

  //simple url
  //var url = "http://ochre.lib.uchicago.edu/ochre?&xquery=for%20$q%20in%20input()/ochre[@uuid=%27fa3dd2d3-5e91-48de-9989-0ce3f8e18a1c%27]%20return%20<apiResults>{$q//spatialUnit[contains(text(),'" + searchTerm + "')]}</apiResults>";

  //complex url
  var url = "https://ochre.lib.uchicago.edu/ochre?&xquery=for%20$q%20in%20input()/ochre[@uuid='ca126815-a753-4794-9277-cbb100942cc8']/set/items%20return%20<apiResults>%20{%20for%20$s%20in%20$q/spatialUnit[identification/label[matches(text(),'" + searchTerm + "', 'i')]]%20return%20<item>%20{$s/@uuid}%20{$s/identification/label}%20{$s/description}</item>%20}%20</apiResults>"

  return fetch(url)
  .then(response => response.text())
  .then(data =>{
    console.log(data); //string
    //document.getElementById('output').textContent = data;
    let parser = new DOMParser();
    let xml = parser.parseFromString(data, "application/xml");
    listResults_02(xml);
  });
};

//This function establishes a simple baseline
function listResults(xmlResults){
  //console.log(xmlResults);
  var resultList = xmlResults.getElementsByTagName("apiResults");
  var itemList = resultList[0].childNodes;
  for (var i = 0; i < itemList.length; i++) {
    let itemName = itemList[i].firstChild.nodeValue;
    let itemUUID = itemList[i].getAttribute('uuid')
    let itemLink = document.createElement('a');
    itemLink.href = 'http://ochre.lib.uchicago.edu/ochre?uuid='+itemUUID;
    itemLink.id = 'itemLink_'+i;
    let listItem = document.createElement('div');
    listItem.id = 'resultItem_'+i;
    listItem.innerHTML = itemName;
    document.getElementById('xqueryOutput').appendChild(itemLink);
    document.getElementById('itemLink_'+i).appendChild(listItem);
  };
};

//This function handles a slightly more complicate xQuery
function listResults_02(xmlResults){
  //console.log(xmlResults);
  let resultList = xmlResults.getElementsByTagName("apiResults");
  var itemList = resultList[0].childNodes;
  for (var i = 0; i < itemList.length; i++) {
    let itemName = itemList[i].childNodes[0].firstChild.nodeValue;
    let itemUUID = itemList[i].getAttribute('uuid')
    let itemDescription = itemList[i].childNodes[1].firstChild.nodeValue;
    //console.log(itemName);
    //console.log(itemDescription);
    let itemLink = document.createElement('a');
    itemLink.href = 'http://ochre.lib.uchicago.edu/ochre?uuid=' + itemUUID;
    itemLink.id = 'itemLink_' + i;
    let listItem = document.createElement('div');
    listItem.id = 'resultItem_' + i;
    listItem.textContent = `${itemName} — ${itemDescription}`;
    document.getElementById('xqueryOutput').appendChild(itemLink);
    document.getElementById('itemLink_' + i).appendChild(listItem);
  }
};


function listResults_03(xmlResults){
  //console.log(xmlResults);
  let resultList = xmlResults.getElementsByTagName("apiResults");
  //var itemList = resultList.childNodes;
  for (var i = 0; i < resultList.length; i++) {
    let itemName = resultList[i].childNodes[0].childNodes[0].firstChild.nodeValue;
    let itemUUID = resultList[i].childNodes[0].getAttribute('uuid')
    let itemDescription = resultList[i].childNodes[0].childNodes[1].firstChild.nodeValue;
    //console.log(itemName);
    //console.log(itemDescription);
    let itemLink = document.createElement('a');
    itemLink.href = 'http://ochre.lib.uchicago.edu/ochre?uuid=' + itemUUID;
    itemLink.id = 'itemLink_' + i;
    let listItem = document.createElement('div');
    listItem.id = 'resultItem_' + i;
    listItem.textContent = `${itemName} — ${itemDescription}`;
    document.getElementById('xqueryOutput').appendChild(itemLink);
    document.getElementById('itemLink_' + i).appendChild(listItem);
  }
};
