var parentElement = $('#ochreTableBody');

$.ajax({
  method: "GET",
  url: "https://ochre.lib.uchicago.edu/ochre?uuid=accd571b-bae3-4d42-93d9-58b65ec79300",
  data: "xml",
  statusCode: {
    404: function(){
      console.log('XML Load -- Fail 404');
    },
    200: function(){
      console.log('XML Load -- OK');
    },
  },
  success: function(responseXML){
    createHeaders(responseXML);
    listTexts(responseXML);
  }
});

function createHeaders(sourceXML){
  $('#projectTitle').text(sourceXML.getElementsByTagName('metadata')[0].children[1].innerHTML);
  $('#setTitle').text(sourceXML.getElementsByTagName('set')[0].children[3].children[0].innerHTML);
  $('#setDescription').text(sourceXML.getElementsByTagName('set')[0].children[4].innerHTML);
  $('#license').text(sourceXML.getElementsByTagName('availability')[0].children[0].innerHTML);
  $('#license').attr('href', sourceXML.getElementsByTagName('availability')[0].children[0].attributes[0].nodeValue);
}

function listTexts(sourceXML){
  console.log(sourceXML);
  let textList = sourceXML.getElementsByTagName('text');
  console.log(textList);
  for (i=0; i < textList.length; i++) {
    //create one row per item
    var tr = document.createElement('tr');
    tr.setAttribute('class','ochreTableRows');
    tr.setAttribute('id','row_'+i);
    document.getElementById('ochreTableBody').appendChild(tr);
    //populate the cells in the row
    var td = document.createElement('td');
    td.setAttribute('id','td_name_'+i);
    td.textContent = textList[i].children[0].children[0].innerHTML;
    document.getElementById('row_'+i).appendChild(td);
    var td2 = document.createElement('td');
    td2.setAttribute('id','td_desc_'+i);
    td2.textContent = textList[i].children[3].innerHTML;
    document.getElementById('row_' + i).appendChild(td2);
  };
}

