function createXquery() {
  document.getElementById('xqueryOutput').innerHTML = "";
  var searchTerm = document.getElementById('searchTerm').value;
  var url = "http://ochre.lib.uchicago.edu/ochre?&xquery=for%20$q%20in%20input()/ochre[@uuid=%27fa3dd2d3-5e91-48de-9989-0ce3f8e18a1c%27]%20return%20$q//spatialUnit[text()[contains(.,'" + searchTerm + "')]]";
  console.log(url);
  XMLrequest(url);
  console.log('loadXML -- OK');
};

function XMLrequest(url){
  var connect = new XMLHttpRequest();
  connect.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      listResults(this.responseXML);
    };
  };
  connect.open("GET", url, true);
  connect.send();
  console.log('XMLrequest -- OK');
};

function listResults(xmlResults){
  var resultList = xmlResults.getElementsByTagName("xq:result");
  var itemList = resultList[0].childNodes;

  for (var i = 0; i < itemList.length; i++) {
    var itemLink = document.createElement('a');
    itemLink.href = 'http://ochre.lib.uchicago.edu/ochre?uuid='+itemList[i].attributes[0].nodeValue;
    itemLink.id = 'itemLink_'+i;
    var listItem = document.createElement('div');
    listItem.id = 'resultItem_'+i;
    listItem.innerHTML = itemList[i].childNodes[0].textContent;
    document.getElementById('xqueryOutput').appendChild(itemLink);
    document.getElementById('itemLink_'+i).appendChild(listItem);
  };

};


