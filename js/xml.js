function loadXMLDoc() {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      listTexts(this);
    }
  };
  xmlhttp.open("GET", "media/rsti.xml", true);
  xmlhttp.send();
};

function listTexts(xml) {
  let objectData, i, xmlDoc;
  xmlDoc = xml.responseXML;

  objectData = xmlDoc.getElementsByTagName("property");

  for (i = 0; i < objectData.length; i++) {
    if (objectData[i].children[0].attributes[0].nodeValue==="1db231a7-a055-d5c6-08a8-b06022c8daec") {
      let newDiv = document.createElement("div");
      newDiv.className = "d-block";
      newDiv.innerHTML = objectData[i].children[1].innerHTML;
      document.getElementById("objectList").appendChild(newDiv);
    };
  };
};
