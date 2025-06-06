function searchProject() {
  document.getElementById('xqueryOutput').innerHTML = "";
  var searchTerm = document.getElementById('searchProject').value;
  var url = "https://ochre.lib.uchicago.edu/ochre?&xquery=for%20$q%20in%20input()/ochre[@uuidBelongsTo=%2746ccab46-9c3f-4448-8476-2bf18236791e%27]/* where $q[identification/label[matches(text(),'" + searchTerm + "', 'i')]] return <results><item>{$q/@uuid}%20{$q/identification/label}%20{$q/description}</item></results>";


  //var url = "http://ochre.lib.uchicago.edu/ochre?&xquery=for%20$q%20in%20input()/ochre[@uuidBelongsTo=%2746ccab46-9c3f-4448-8476-2bf18236791e%27]/*%20return%20<results>{for%20$s%20in%20$q[identification/label[matches(text(),'" + searchTerm + "', 'i')]]%20return%20%3Citem%3E%20{$s/@uuid}%20{$s/identification/label}%20{$s/description}%3C/item%3E}</results>";
  //var url = "https://ochre.lib.uchicago.edu/ochre?&xquery=for%20$q%20in%20input()/ochre[@belongsTo=%27RSTI%27]/*%20return%20for%20$s%20in%20$q[identification/label[matches(text(),'" + searchTerm + "', 'i')]]%20return%20%3Citem%3E%20{$s/@uuid}%20{$s/identification/label}%20{$s/description}%3C/item%3E";
  //var url = "https://ochre.lib.uchicago.edu/ochre?&xquery=for%20$q%20in%20input()/ochre[@uuid='ca126815-a753-4794-9277-cbb100942cc8']/set/items%20return%20<results>%20{%20for%20$s%20in%20$q/spatialUnit[description[matches(text(),'" + searchTerm + "', 'i')]]%20return%20<item>%20{$s/@uuid}%20{$s/identification/label}%20{$s/description}</item>%20}%20</results>"
  //var url = "http://ochre.lib.uchicago.edu/ochre?&xquery=for%20$q%20in%20input()/ochre[@uuid=%2746ccab46-9c3f-4448-8476-2bf18236791e%27]/spatialUnit%20return%20for%20$s%20in%20$q[identification/label[matches(text(),'" + searchTerm + "', 'i')]]%20return%20%3Citem%3E%20{$s/@uuid}%20{$s/identification/label}%20{$s/description}%3C/item%3E";
  return fetch(url)
  .then(response => response.text())
  .then(data =>{
    console.log(data); //string
    //document.getElementById('output').textContent = data;
    let parser = new DOMParser();
    let xml = parser.parseFromString(data, "application/xml");
    listResults_03(xml);
  })
  .catch(error => document.getElementById('xqueryOutput').innerHTML="No results found");
};

function searchDescription() {
  document.getElementById('xqueryOutput').innerHTML = "";
  var searchTerm = document.getElementById('searchDesc').value;
  var url = "https://ochre.lib.uchicago.edu/ochre?&xquery=for%20$q%20in%20input()/ochre[@uuid='ca126815-a753-4794-9277-cbb100942cc8']/set/items%20return%20<results>%20{%20for%20$s%20in%20$q/spatialUnit[description[matches(text(),'" + searchTerm + "', 'i')]]%20return%20<item>%20{$s/@uuid}%20{$s/identification/label}%20{$s/description}</item>%20}%20</results>"
  return fetch(url)
  .then(response => response.text())
  .then(data =>{
    console.log(data); //string
    //document.getElementById('output').textContent = data;
    let parser = new DOMParser();
    let xml = parser.parseFromString(data, "application/xml");
    listResults_02(xml);
  })
  .catch(error => document.getElementById('xqueryOutput').innerHTML="No results found");
};

function createXquery() {
  document.getElementById('xqueryOutput').innerHTML = "";
  var searchTerm = document.getElementById('searchTerm').value;
  //simple url
  //var url = "http://ochre.lib.uchicago.edu/ochre?&xquery=for%20$q%20in%20input()/ochre[@uuid=%27fa3dd2d3-5e91-48de-9989-0ce3f8e18a1c%27]%20return%20<results>{$q//spatialUnit[contains(text(),'" + searchTerm + "')]}</results>";
  //complex url
  var url = "https://ochre.lib.uchicago.edu/ochre?&xquery=for%20$q%20in%20input()/ochre[@uuid='ca126815-a753-4794-9277-cbb100942cc8']/set/items%20return%20<results>%20{%20for%20$s%20in%20$q/spatialUnit[identification/label[matches(text(),'" + searchTerm + "', 'i')]]%20return%20<item>%20{$s/@uuid}%20{$s/identification/label}%20{$s/description}</item>%20}%20</results>"
  console.log(url);
  return fetch(url)
  .then(response => response.text())
  .then(data =>{
    console.log(data); //string
    //document.getElementById('output').textContent = data;
    let parser = new DOMParser();
    let xml = parser.parseFromString(data, "application/xml");
    listResults_02(xml);
  })
  .catch(error => document.getElementById('xqueryOutput').innerHTML="No results found");
};

function searchResource() {
  document.getElementById('xqueryOutput').innerHTML = "";
  var searchTerm = document.getElementById('searchResDesc').value;
  var url = "https://ochre.lib.uchicago.edu/ochre?&xquery=for%20$q%20in%20input()/ochre[@uuidBelongsTo='4724cad8-1b09-4373-aca7-51a4dc5e2255']/resource%20where $q/identification/label[matches(text(),'"+searchTerm+"', 'i')]return <results>{$q/@uuid} {$q/identification/label} {$q/description}</results>"
  return fetch(url)
  .then(response => response.text())
  .then(data =>{
    console.log(data); //string
    //document.getElementById('output').textContent = data;
    let parser = new DOMParser();
    let xml = parser.parseFromString(data, "application/xml");
    listResults_04(xml);
  })
  .catch(error => document.getElementById('xqueryOutput').innerHTML="No results found");
};

//This is close. The fetch doesn't like the URL for some reason. Tried with contains and match.
function searchDynamic(){
  document.getElementById('xqueryOutput').innerHTML = "";
  var e = document.getElementById("selectProject");
	var project = e.value; // UUID
  var f = document.getElementById("selectCategory");
	var category = f.value; // Category
  var searchTerm = document.getElementById('searchDynamic').value;
  var url = "https://ochre.lib.uchicago.edu/ochre?xquery=for%20$q%20in%20input()/ochre[@uuidBelongsTo='"+project+"']/"+category+"%20where%20$q[identification/label[contains(text(),'" + searchTerm + "')]]%20return%20%3Cresults%3E%3Citem%3E{$q/@uuid}%20{$q/identification/label}%20{$q/description}%3C/item%3E%3C/results%3E";
  console.log(url);
  //var url = 'https://ochre.lib.uchicago.edu/ochre?xquery=for%20$q%20in%20input()/ochre[@uuidBelongsTo=%2746ccab46-9c3f-4448-8476-2bf18236791e%27]/spatialUnit%20where%20$q[identification/label[matches(text(),%27Soukas%27,%20%27i%27)]]%20return%20%3Cresults%3E%3Citem%3E{$q/@uuid}%20{$q/identification/label}%20{$q/description}%3C/item%3E%3C/results%3E'
  return fetch(url)
  .then(response => response.text())
  .then(data =>{
    console.log(data); //string
    //document.getElementById('output').textContent = data;
    let parser = new DOMParser();
    let xml = parser.parseFromString(data, "application/xml");
    listResults_03(xml);
  })
  .catch(error => document.getElementById('xqueryOutput').innerHTML="No results found");
};





//This function establishes a simple baseline
function listResults(xmlResults){
  //console.log(xmlResults);
  var resultList = xmlResults.getElementsByTagName("results");
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
  let resultList = xmlResults.getElementsByTagName("results");
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
  let resultList = xmlResults.getElementsByTagName("results");
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

function listResults_04(xmlResults){
  //console.log(xmlResults);
  let resultList = xmlResults.getElementsByTagName("results");
  for (var i = 0; i < resultList.length; i++) {
    let itemName = resultList[i].childNodes[0].firstChild.nodeValue;
    let itemUUID = resultList[i].getAttribute('uuid')
    //let itemDescription = resultList[i].childNodes[1].firstChild.nodeValue;
    //console.log(itemName);
    //console.log(itemDescription);
    let itemLink = document.createElement('a');
    itemLink.href = 'http://ochre.lib.uchicago.edu/ochre?uuid=' + itemUUID;
    itemLink.id = 'itemLink_' + i;
    let listItem = document.createElement('div');
    listItem.id = 'resultItem_' + i;
    listItem.textContent = itemName;
    document.getElementById('xqueryOutput').appendChild(itemLink);
    document.getElementById('itemLink_' + i).appendChild(listItem);
  }
};

//project 91bc7973-1d47-4da7-b971-a99289f69793
//resource 87343afd-c9e3-4474-be9c-174c848ab978
var url = "https://ochre.lib.uchicago.edu/ochre?&xquery=for%20$q%20in%20input()/ochre[@uuidBelongsTo=%2791bc7973-1d47-4da7-b971-a99289f69793%27]/resources where $q[@uuid='87343afd-c9e3-4474-be9c-174c848ab978'] return <results><item>{$q/@uuid}%20{$q/identification/label}%20{$q/description}</item></results>";
