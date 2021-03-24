//This is an attempt to test the loading speed of a large data set
//Ultimatey, though, this is not an extensible strategy.

//full UUID 83739c7a-b4ce-47c7-b723-b5ccc7da71a2
//sample UUID accd571b-bae3-4d42-93d9-58b65ec79300
//Large Set bd4e7a47-12c0-4771-bb2d-ddb1994e459a
var link = "https://ochre.lib.uchicago.edu/ochre?uuid=bd4e7a47-12c0-4771-bb2d-ddb1994e459a";
var spatialUnits = [];

function loadXML(){
  XMLrequest(link);
  console.log('loadXML -- OK');
};

function XMLrequest(link) {
  var connect = new XMLHttpRequest();
  connect.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      listItems(this.responseXML);
    }
  };
  connect.open("GET", link, true);
  connect.send();
  console.log('XMLrequest -- OK');
};

function listItems(sourceXML) {
  //var spatialUnits = sourceXML.getElementsByTagName('spatialUnit');
  var items = sourceXML.getElementsByTagName('items')[0];
  var spatialUnits = items.childNodes;
  for (var i = 0; i < spatialUnits.length; i++) {
    var itemName = spatialUnits[i].childNodes[0].childNodes[0].textContent;
    /* var itemAliasNode = spatialUnits[i].childNodes[0].childNodes;
    var itemAliases = []
    for (var j = 1; j < itemAliasNode.length; j++){
      itemAliases.push(itemAliasNode[j].innerHTML);
    }; */
    var tr = document.createElement('tr');
    tr.className = 'ochreTableRows';
    //Set unique attributes per row.
    tr.id = 'row_'+i;
    document.getElementById('ochreTableBody').appendChild(tr);
    var td = document.createElement('td');
    td.className = 'Name';
    td.id = 'td_row_'+i;
    td.textContent = itemName;
    document.getElementById('row_'+i).appendChild(td);
  };

};
