function testXpath() {
  // create a DOM document
  var xmlStr = "<?xml version='1.0' encoding='UTF-8'?>" +
    "<xsl:stylesheet version='1.0' xmlns:xsl='http://www.w3.org/1999/XSL/Transform'>" +
    "<xsl:output method='xml' version='1.0' encoding='UTF-8' indent='yes'/>" +
    "<xsl:template match='*'></xsl:template><xsl:template match='@*'>" +
    "</xsl:template></xsl:stylesheet>";
  var xmlDoc = (new DomParser()).parseFromString(xmlStr, "text/xml");

  // the following two lines are needed for IE
  xmlDoc.setProperty("SelectionNamespaces", "xmlns:xsl='http://www.w3.org/1999/XSL/Transform'");
  xmlDoc.setProperty("SelectionLanguage", "XPath");

  // test XPath expressions on the document
  testSelectNodesOn(xmlDoc, "//xsl:template");
  testSelectNodesOn(xmlDoc.documentElement, "//xsl:template");
  testSelectNodesOn((xmlDoc.documentElement.getElementsByTagName("*"))[0], "//xsl:template");
}

function testSelectNodesOn(domNode, sXpath) {
  alert("testing selectNodes(" + sXpath + ") on a " + domNode);
  var objNodeList = domNode.selectNodes(sXpath);
  for (i = 0; i < objNodeList.length; i++) {
    alert(new XMLSerializer().serializeToString(objNodeList[i]));
  };
  alert("testing selectSingleNode(" + sXpath + ") on a " + domNode);
  var oElem = domNode.selectSingleNode(sXpath);
  alert(oElem + "\n" + new XMLSerializer().serializeToString(oElem));
};
