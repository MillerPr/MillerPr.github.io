// To do generalize for a variety of properties
// Configure picklist in XSLT to provide property UUID to this script.
// Toggle between bar/pie?

// RSTI object outside of Ugarit
// var link = "https://ochre.lib.uchicago.edu/ochre?uuid=240e6e06-9d05-4210-aa83-f4190639886d";

// Over 4,000 Ashkelon objects
// var link = "https://ochre.lib.uchicago.edu/ochre?uuid=0cc8310e-2742-4411-82df-9cfeb4329033";

// Under 100 Ashkelon objects
var link = "https://ochre.lib.uchicago.edu/ochre?uuid=abae58bb-466d-4cc8-bbd2-782eb87f402e"

// Ashkelon 1,500 objects
//var link = "https://ochre.lib.uchicago.edu/ochre?uuid=ba02117e-cbfb-4ef3-af7e-eeb486561f80"

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', loadXML);
})

//$('#projectTitle').html('OCHRE')
//$('#setTitle').html(getXPathAll(sourceXML, '//set/identification/label').snapshotItem(0).textContent)
//$('#setDescription').html(getXPathAll(sourceXML, '//set/description').snapshotItem(0).textContent)

function loadXML(){
  XMLrequest(link);
  console.log('loadXML -- OK');
};

function XMLrequest(link) {
  var connect = new XMLHttpRequest();
  connect.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      makeViz(this.responseXML);
    }
  };
  connect.open("GET", link, true);
  connect.send();
  console.log('XMLrequest -- OK');
};

var baseXPath = '/ino:response/xq:result/ochre'
// var baseXPath = '//ochre'

function nsResolver(prefix) {
  var ns = {
    'ino' : 'http://namespaces.softwareag.com/tamino/response2',
    'xq' : 'http://namespaces.softwareag.com/tamino/XQuery/result'
  };
  return ns[prefix] || null;
}

// Snapshot Type
function getXPathAll(sourceXML, XPath) {
  return sourceXML.evaluate(XPath, sourceXML, nsResolver, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
}

// Iterator Type
function getXPathAllIt(sourceXML, XPath) {
  return sourceXML.evaluate(XPath, sourceXML, nsResolver, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
}

function makeViz(sourceXML) {
  let setName = getXPathAll(sourceXML, baseXPath + '/set/identification/label').snapshotItem(0).textContent
  var yValues = []
  // Get the matching node set
  let objectTypes = getXPathAllIt(sourceXML, baseXPath + '/set/items/spatialUnit/properties/property[label/@uuid="7ed72a30-14a2-df6f-a2c9-76295cdb4bdb"]/value');
  let node = null;
  var objectTypeArray = []
  while (node = objectTypes.iterateNext()) {
    objectTypeArray.push(node.textContent)
  }

  //remove dups from Array
  let xValuesA = [...new Set(objectTypeArray)];
  let xValues = xValuesA.sort()
  //console.log(xValues)

  // count the nodes for each object type by matching an XPath statement and using snapShotLength
  for (let i = 0; i < xValues.length; i++) {
    let valueCount = getXPathAll(sourceXML, '//set/items/spatialUnit/properties/property[label/@uuid="7ed72a30-14a2-df6f-a2c9-76295cdb4bdb"]/value[text()="'+xValues[i]+'"]').snapshotLength;
    yValues.push(valueCount);
  }


  var barColors = []
  // produce enough colors
  for (let i = 0; i < xValues.length; i++) {
    barColors.push("#" + Math.random().toString(16).slice(2, 8))
  }

  new Chart("myChart", {
    type: "doughnut",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
        // (data as an object) data: [{x: 10, y: 20}, {x: 15, y: null}, {x: 20, y: 10}]
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: setName,
          align: "center",
          padding: {
            top: 10,
            bottom: 30
          }
        },
        legend: {
          display: true,
          position: "left",
          labels: {
            usePointStyle: true,
            color: 'rgb(255, 99, 132)'
          },
          onHover: handleHover,
          onLeave: handleLeave
        }
      }
    }
  });
};

// Append '4d' to the colors (alpha channel), except for the hovered index
function handleHover(evt, item, legend) {
  legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {
    colors[index] = index === item.index || color.length === 9 ? color : color + '4D';
  });
  legend.chart.update();
}

// Removes the alpha channel from background colors
function handleLeave(evt, item, legend) {
  legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {
    colors[index] = color.length === 9 ? color.slice(0, -2) : color;
  });
  legend.chart.update();
}

