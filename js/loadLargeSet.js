//This is an attempt to test the loading speed of a large data set
//Ultimately, though, this is not an extensible strategy.

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
    //Create a new row
    var tr = document.createElement('tr');
    tr.className = 'ochreTableRows';
    tr.id = 'row_'+i;
    document.getElementById('ochreTableBody').appendChild(tr);

    //Create Name column
    var itemName = spatialUnits[i].childNodes[0].childNodes[0].textContent;
    var td = document.createElement('td');
    td.className = 'Name';
    td.id = 'td_row_'+i;
    td.textContent = itemName;
    document.getElementById('row_'+i).appendChild(td);

    //Create Alias column
    var itemAliasNode = spatialUnits[i].childNodes[0].childNodes;
    var itemAliases = []
    for (var j = 1; j < itemAliasNode.length; j++){
      itemAliases.push(itemAliasNode[j].innerHTML);
    };
    var td2 = document.createElement('td');
    td2.className = 'Alias';
    td2.id = 'td2_row_'+i;
    td2.textContent = itemAliases.join(', ');
    document.getElementById('row_'+i).appendChild(td2);

    //Description
    var itemDescription = spatialUnits[i].childNodes[2].textContent;
    var td3 = document.createElement('td');
    td3.className = 'Description';
    td3.id = 'td3_row_'+i;
    td3.textContent = itemDescription;
    document.getElementById('row_'+i).appendChild(td3);

    //Context
    var itemContext = spatialUnits[i].childNodes[1].textContent;
    var td4 = document.createElement('td');
    td4.className = 'Context';
    td4.id = 'td4_row_'+i;
    td4.textContent = itemContext;
    document.getElementById('row_'+i).appendChild(td4);

    //Period
    var itemPeriod = spatialUnits[i].childNodes[3].textContent;
    var td5 = document.createElement('td');
    td5.className = 'Period';
    td5.id = 'td5_row_'+i;
    td5.textContent = itemPeriod;
    document.getElementById('row_'+i).appendChild(td5);
  };

};
