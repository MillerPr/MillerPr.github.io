var link = "https://ochre.lib.uchicago.edu/ochre?uuid=accd571b-bae3-4d42-93d9-58b65ec79300";
var textList = [];

function loadXML(){
  XMLrequest(link);
  console.log('loadXML -- OK');
};

function XMLrequest(link) {
  var connect = new XMLHttpRequest();
  connect.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      listTexts(this.responseXML);
    }
  };
  connect.open("GET", link, true);
  connect.send();
  console.log('XMLrequest -- OK');
};

function listTexts(sourceXML) {
  var textList = sourceXML.getElementsByTagName('text');
  //Save the sourceXML document in this function scope
  xmlDOM = sourceXML;
  //Iterate through the text nodes, creating a table row for each node.
  //The table element already exists on the HTML page.
  //This just adds rows.
  for (var i = 0; i < textList.length; i++) {
    var tr = document.createElement('tr');
    tr.className = 'ochreTableRows';
    //Set unique attributes per row.
    tr.id = 'row_'+i;
    document.getElementById('ochreTableBody').appendChild(tr);
    var td = document.createElement('td');
    td.className = 'Name';
    td.id = 'td_row_'+i;
    //Create an anchor link for each text name.
    var button = document.createElement('button');
    var textUUID = textList[i].attributes[1].nodeValue;
    button.id = textUUID;
    //onclick passes the text UUID and the xmlDOM to the next function.
    button.setAttribute('onclick','photoBlock(this.id, xmlDOM)');
    button.setAttribute('target', '_blank');
    button.className = 'textSelection btn btn-link';
    var textLabel = textList[i].childNodes[0].childNodes[0].innerHTML
    button.textContent= textLabel;
    document.getElementById('row_'+i).appendChild(td);
    document.getElementById('td_row_'+i).appendChild(button);
    var td2 = document.createElement('td');
    td2.className = 'Description';
    var textDescription = textList[i].childNodes[3].innerHTML;
    td2.textContent = textDescription;
    document.getElementById('row_' + i).appendChild(td2);
  };
};

function photoBlock(textUUID, xmlDOM) {
  //console.log(xmlDOM);
  var imageText = xmlDOM.getElementsByTagName('text');
  document.getElementById('imgBlock').innerHTML = "";
  //console.log(imageText);
  var imageUUIDs = [];
  for (var i = 0; i < imageText.length; i++) {
    if(imageText[i].attributes[1].nodeValue === textUUID){
      //console.log(imageText[i]);
      var linksList = imageText[i].getElementsByTagName('resource');

      //console.log(linksList);
      for (var n = 0; n < linksList.length; n++){
        var attUUID = linksList[n].attributes.uuid.nodeValue;
        var imageUUID = attUUID;
        imageUUIDs.push(imageUUID);
      };
    };
  };
  //console.log(imageUUIDs);
  for (var i = 0; i < imageUUIDs.length; i++) {
    var a = document.createElement('a');
    a.setAttribute('href', 'http://ochre.lib.uchicago.edu/ochre?uuid='+imageUUIDs[i]+'&image');
    a.target = "_blank";
    a.id = 'link_'+i;
    document.getElementById('imgBlock').appendChild(a);
    var img = document.createElement('img');
    img.setAttribute('src','http://ochre.lib.uchicago.edu/ochre?uuid='+imageUUIDs[i]+'&preview');
    img.id = 'image_'+i;
    document.getElementById('link_'+i).appendChild(img);
    var cap = document.createElement('figcaption');
    cap.innerHTML = linksList[i].innerHTML;
    document.getElementById('link_'+i).appendChild(cap);

  };
};
