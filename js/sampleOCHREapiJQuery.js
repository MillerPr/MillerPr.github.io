//CONSIDER USING AN EVENT LISTENER TO LAUNCH AFTER THE PAGE HAS LOADED...

$.ajax({
  method: "GET",
  url: "https://ochre.lib.uchicago.edu/ochre?uuid=73cb4c93-5c1c-49b1-b62e-885b39e57e3c",
  data: "xml",
  statusCode: {
    404: function(){
      console.log('XML Load -- Fail 404');
    },
    200: function(){
      console.log('XML Load -- OK');
    },
  },
  // THESE DON'T NECESSARILY NEED TO BE TWO FUNCTIONS
  success: function(responseXML){
    getMetadata(responseXML);
    getData(responseXML);
  }
});

function getMetadata(sourceXML){
  console.log(sourceXML)
  // THIS APPROACH MANUALLY TRAVERSES THE METADATA NODE BY POSITION TO GET THE PROJECT TITLE
  $('#projectTitle').text(sourceXML.getElementsByTagName('metadata')[0].children[1].innerHTML);
}

function getData(sourceXML){
  console.log(sourceXML);
  // THIS APPROACH USES THE FIND() FUNCTION TO EXTRACT THE PROPERTY VARIABLE LABEL NODE BY UUID, THEN FINDS THE VALUE IN THE NEXT NODE
  var shotData = $(sourceXML).find("label[uuid='9c671d91-d721-4397-83ae-a66be4fa9b17']").next().text()
  console.log(shotData)
  // PARSE THE SHOTS DATA TO DISPLAY AS THE CHART
  // WRITE YOUR CODE HERE...
  // var chartData = []
}

