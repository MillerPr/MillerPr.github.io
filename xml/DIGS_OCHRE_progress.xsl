<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0" xmlns:ino="http://namespaces.softwareag.com/tamino/response2" xmlns:xql="http://metalab.unc.edu/xql" xmlns:xq="http://namespaces.softwareag.com/tamino/XQuery/result" xmlns:a="http://www.w3.org/1999/xhtml">
    <xsl:output method="html" version="5.0" encoding="UTF-8"/>

    <!-- Strip extra white space everywhere. -->
    <xsl:strip-space elements="*"/>

    <!-- THE PRIMARY TEMPLATE, MATCHING FROM THE DOCUMENT NODE (THE VERY TOP) OR FROM THE OCHRE NODE. -->
    <xsl:template match="ochre">
        <html>
            <head>
                <meta charset="UTF-8"/>

                <!-- **Add Bootstrap CSS link -->
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"/>

                <!-- **Link to your CSS -->
                <link rel="stylesheet" href="css/xml.css"/>

                <!-- **Add Bootstrap JS link -->
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"/>

                <!--CREATE VARIABLES AND PARAMS TO BE USED BY A MAP API.-->
                <!-- If there are coordinates, make a map -->
                <xsl:if test="//coordinates">
                    <!--THESE VARIABLES AND PARAMS ARE USED BY THE MAP JS-->
                    <xsl:variable name="lat" select="number(//coordinates/@latitude)"/>
                    <xsl:variable name="lng" select="number(//coordinates/@longitude)"/>
                    <xsl:variable name="itemName" select="string(//ochre/spatialUnit/identification/label)"/>
                    <param id="lat" value="{$lat}"/>
                    <param id="lng" value="{$lng}"/>
                    <param id="itemName" value="{$itemName}"/>

                    <!-- Load Leaflet from CDN -->
                    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin=""/>
                    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""/>

                    <!-- Load Esri Leaflet from CDN -->
                    <script src="https://unpkg.com/esri-leaflet@3.0.2/dist/esri-leaflet.js" integrity="sha512-myckXhaJsP7Q7MZva03Tfme/MSF5a6HC2xryjAM4FxPLHGqlh5VALCbywHnzs2uPoF/4G/QVXyYDDSkp5nPfig==" crossorigin=""/>
                </xsl:if>
            </head>
            <body>
                <!-- BODY INFORMATION NOT IN A SPECIFIC TEMPLATE, MUST APPLY TO ALL dB OBJECTS -->


                <div>
                    <!-- APPLY ALL TEMPLATES HERE -->
                    <xsl:apply-templates/>

                    <!-- ADD PUBLICATION DATE AND LICENSE FOOTER-->
                    <xsl:call-template name="license"/>

                </div>
                <xsl:if test="//coordinates">
                    <script src="js/ochreMap.js"/>
                </xsl:if>
            </body>
        </html>
    </xsl:template>

    <!-- CATCH AND KILL TEMPLATE -->
    <xsl:template match="text()"> </xsl:template>

    <!-- METADATA, for project name -->
    <xsl:template match="metadata">
        <div id="subHead">
            <div class="row">
                <div class="col d-none d-xl-block">
                    <div id="splashTitle" class="text-end mx-5 my-4">
                        <xsl:apply-templates select="description"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="container d-block d-xl-none">
            <h2 id="projectName">
                <xsl:apply-templates select="description"/>
            </h2>
        </div>
    </xsl:template>

    <xsl:template name="license">
        <footer id="footer" class="d-none d-md-block footer container-fluid mt-auto py-3">
            <a id="footerLink" href="{//availability/license/@target}">
                <xsl:value-of select="//availability/license/text()"/>
            </a>
        </footer>
    </xsl:template>

    <!-- STRUCTURAL TEMPLATES USABLE BY ALL DATATYPES -->
    <!-- EXCEPT FOR Sets -->
    <xsl:template name="globalNodes">
        <div id="globalNodes" class="mt-5">
            <div id="globalIdDescr" class="row">
                <xsl:apply-templates select="identification"/>
                <xsl:apply-templates select="description"/>
            </div>
            <hr/>
            <div id="globalPLNC" class="row">
                <xsl:if test="not(self::set)">
                    <div id="globalProperties" class="col">
                        <xsl:apply-templates select="//periods"/>
                        <xsl:apply-templates select="//properties"/>
                        <xsl:if test="not(self::set)">
                            <div id="globalLinks" class="row">
                                <xsl:apply-templates select="//links"/>
                            </div>
                        </xsl:if>
                        <xsl:if test="not(self::set)">
                            <div id="globalNotes" class="row">
                                <xsl:apply-templates select="//notes"/>
                            </div>
                        </xsl:if>
                    </div>
                </xsl:if>
                <div id="globalCoord" class="col">
                    <xsl:apply-templates select="coordinates"/>
                </div>
            </div>
        </div>
    </xsl:template>

    <!-- GLOBAL NODES -->

    <xsl:template match="alias">
        <span class="itemAlias">
            <xsl:value-of select="."/>
            <xsl:if test="not(position() = last())">
                <xsl:text>, </xsl:text>
            </xsl:if>
        </span>
    </xsl:template>

    <xsl:template name="comments"> </xsl:template>

    <xsl:template match="coordinates">
        <div class="coordinatesXsl col">
            <div id="coordinateHeading" class="globalHeading">Coordinates</div>
            <xsl:text>Lat: </xsl:text>
            <xsl:value-of select="@latitude"/>
            <xsl:text>, Lon: </xsl:text>
            <xsl:value-of select="@longitude"/>
            <div id="map"/>
        </div>
    </xsl:template>

    <xsl:template match="description">
        <div class="descriptionXsl">
            <xsl:value-of select="."/>
        </div>
    </xsl:template>

    <xsl:template match="identification">
        <div class="identificationXsl">
            <xsl:value-of select="label"/>
            <!-- foreign languages may occur. -->
            <xsl:if test="alias">
                <xsl:text> (</xsl:text>
                <xsl:apply-templates select="alias"/>
                <xsl:text>)</xsl:text>
            </xsl:if>
        </div>
    </xsl:template>

    <xsl:template match="links">
        <div class="linksXsl">
            <div id="resourceHeading" class="globalHeading">Resource links</div>
            <xsl:for-each select="resource">
                <a href="{concat(string('https://pi.lib.uchicago.edu/1001/org/ochre/'), string(@uuid))}" target="_blank">
                    <xsl:value-of select="."/>
                </a>
            </xsl:for-each>
        </div>
    </xsl:template>

    <xsl:template match="notes">
        <div class="notesXsl">
            <div id="notesHeading" class="globalHeading">Notes</div>
            <xsl:apply-templates select="note"/>
        </div>
    </xsl:template>

    <xsl:template match="note">
        <xsl:value-of select="."/>
    </xsl:template>

    <xsl:template match="properties">
        <div class="propertiesXsl">
            <div id="propertyHeading" class="globalHeading">Properties</div>
            <xsl:apply-templates select="property"/>
        </div>
    </xsl:template>

    <xsl:template match="property">
        <ul>
            <li>
                <span class="propertyVariable">
                    <xsl:value-of select="label"/>
                </span>
                <xsl:text> : </xsl:text>
                <span class="propertyValue">
                    <xsl:value-of select="value"/>
                </span>
                <span class="propertyUnit">
                    <xsl:value-of select="value/@unit"/>
                </span>
                <xsl:apply-templates select="property"/>
            </li>
        </ul>
    </xsl:template>

    <xsl:template match="reverseLinks"> </xsl:template>

    <!-- DATA TYPES -->
    <!-- spatial unit -->

    <!-- period -->
    <xsl:template match="periods">
        <div id="periodLocal">
            <div id="periodHeading" class="globalHeading">Periods</div>
        </div>
        <xsl:apply-templates select="period"/>
    </xsl:template>

    <xsl:template match="period">
        <xsl:for-each select=".">
            <xsl:value-of select="."/>
        </xsl:for-each>
    </xsl:template>

    <!-- resource -->
    <xsl:template match="resource">
        <div id="resourceLocal" class="container itemContainer">
            <xsl:call-template name="globalNodes"/>
            <div class="container">
                <div class="row">
                    <div class="col-8">
                        <a class="noPaddingLink" href="https://pi.lib.uchicago.edu/1001/org/ochre/{@uuid}&amp;load">
                            <img width="100%" src="https://pi.lib.uchicago.edu/1001/org/ochre/{@uuid}&amp;preview"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </xsl:template>

    <!-- set -->
    <xsl:template match="set">
        <div id="setCallLocal" class="container-fluid">
            <xsl:call-template name="globalNodes"/>
        </div>
        <div id="setItemsLocal">
            <xsl:apply-templates select="items"/>
        </div>
    </xsl:template>

    <!-- set item -->
    <xsl:template match="items">
        <table class="table table-striped" id="ochreTable">
            <!--table table-striped order-table sortable-->
            <thead id="ochreTableColumns">
                <tr>
                    <!--NAME AND DESCRIPTION ARE DEFAULT COLUMNS-->
                    <th>Name</th>
                    <th>Description</th>

                    <!--PROPERTIES AS SPECIFIED IN OCHRE ARE THE REMAINING COLUMNS, IN ORDER-->
                    <!-- The index [1] says to get the labels from the first item only. -->
                    <xsl:for-each select="//items/*[1]/properties/property">
                        <th id="{label}Heading">
                            <xsl:value-of select="label"/>
                        </th>
                    </xsl:for-each>
                    <xsl:if test="*/image">
                        <th id="imageHeading" class="globalHeading">Image</th>
                    </xsl:if>
                </tr>
            </thead>
            <tbody id="ochreTableBody">
                <xsl:for-each select="//set/items/*">
                    <xsl:variable name="uuid" select="@uuid"/>
                    <tr class="ochreTableRows">
                        <td class="itemName">
                            <xsl:apply-templates select="identification"/>
                        </td>
                        <td class="itemDescription">
                            <xsl:apply-templates select="description"/>
                        </td>
                        <!-- DO NOT CALL THE PROPERTIES TEMPLATE BECAUSE PROPERTIES ARE HANDLED DIFFERENTLY IN PUBLISHED SETS. -->
                        <xsl:for-each select="properties/property">
                            <td>
                                <xsl:value-of select="value"/>
                            </td>
                        </xsl:for-each>
                        <!-- IF THERE IS AN IMAGE, IT WILL BE AVAILABLE IN THE IMAGE NODE, NOT THE LINKS NODE. -->
                        <xsl:if test="image">
                            <xsl:variable name="previewURL" select="image"/>
                            <td id="imageCell">
                                <a href="{concat(substring-before($previewURL, '&amp;'), string('&amp;load'))}">
                                    <img class="img-fluid img-thumbnail" loading="lazy" src="{$previewURL}"/>
                                </a>
                            </td>
                        </xsl:if>
                    </tr>
                </xsl:for-each>
            </tbody>
        </table>
    </xsl:template>

    <!-- spatialUnit -->
    <xsl:template match="spatialUnit">
        <div id="spUnitLocal" class="container">
            <xsl:call-template name="globalNodes"/>
        </div>
    </xsl:template>

    <!-- PROCESS DATA NODES -->


    <!--THE FOLLOWING TEMPLATE CONVERTS LF STYLE LINE BREAKS TO HTML BR STYLE LINE BREAKS-->
    <!--CALL IT WHERE NECESSARY; THE NOTES TEMPLATE.-->
    <xsl:template name="LFsToBRs">
        <xsl:param name="input"/>
        <xsl:choose>
            <xsl:when test="contains($input, '&#xA;')">
                <p>
                    <xsl:value-of select="substring-before($input, '&#xA;')"/>
                </p>
                <xsl:call-template name="LFsToBRs">
                    <xsl:with-param name="input" select="substring-after($input, '&#xA;')"/>
                </xsl:call-template>
            </xsl:when>
            <xsl:otherwise>
                <p>
                    <xsl:value-of select="$input"/>
                </p>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>

</xsl:stylesheet>
