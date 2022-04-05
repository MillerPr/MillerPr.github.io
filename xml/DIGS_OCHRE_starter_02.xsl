<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0" xmlns:ino="http://namespaces.softwareag.com/tamino/response2" xmlns:xql="http://metalab.unc.edu/xql" xmlns:xq="http://namespaces.softwareag.com/tamino/XQuery/result" xmlns:a="http://www.w3.org/1999/xhtml">
    <xsl:output method="html" version="5.0" encoding="UTF-8"/>

    <!-- Strip extra white space everywhere. -->
    <xsl:strip-space elements="*"/>

    <!-- THE PRIMARY TEMPLATE, MATCHING FROM THE DOCUMENT NODE (THE VERY TOP) -->
    <xsl:template match="/">
        <html>
            <head>
                <meta charset="UTF-8"/>
                <!-- If there are coordinates, make a map -->

                <!--CREATE VARIABLES AND PARAMS TO BE USED BY A MAP API.-->
                <xsl:if test="//coordinates">
                    <!--THESE VARIABLES AND PARAMS ARE USED BY THE MAP JS-->
                    <xsl:variable name="lat" select="number(//coordinates/@latitude)"/>
                    <xsl:variable name="lng" select="number(//coordinates/@longitude)"/>
                    <xsl:variable name="itemName" select="//spatialUnit/identification/label"/>
                    <param id="lat" value="{$lat}"/>
                    <param id="lng" value="{$lng}"/>
                    <param id="itemName" value="{$itemName}"/>

                    <!-- Load Leaflet from CDN -->
                    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin=""/>
                    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""/>

                    <!-- Load Esri Leaflet from CDN -->
                    <script src="https://unpkg.com/esri-leaflet@3.0.2/dist/esri-leaflet.js" integrity="sha512-myckXhaJsP7Q7MZva03Tfme/MSF5a6HC2xryjAM4FxPLHGqlh5VALCbywHnzs2uPoF/4G/QVXyYDDSkp5nPfig==" crossorigin=""/>
                </xsl:if>

                <!-- **Add Bootstrap CSS link -->
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

                <!-- **Link to your CSS -->
                <link rel="stylesheet" href="css/xml.css"/>
            </head>
            <body>
                <!-- BODY INFORMATION NOT IN A SPECIFIC TEMPLATE, MUST APPLY TO ALL dB OBJECTS -->
                <div class="container-fluid">
                    <!-- APPLY ALL TEMPLATES BELOW -->
                    <xsl:apply-templates/>
                </div>
                <!-- ADD PUBLICATION DATE AND LICENSE FOOTER-->
                <!-- **Add Bootstrap JS link -->
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"/>
                <script src="js/ochreMap.js"/>
            </body>
        </html>
    </xsl:template>

    <!-- CATCH AND KILL TEMPLATE -->
    <xsl:template match="text()"> </xsl:template>

    <!-- METADATA AND IDs -->
    <xsl:template match="metadata">
        <h2 id="projectName">
            <xsl:apply-templates select="description"/>
        </h2>
    </xsl:template>

    <!-- ADD TEMPLATE WITH GLOBAL DETAILS -->
    <xsl:template name="globalNodes"> </xsl:template>

    <xsl:template match="description">
        <xsl:value-of select="."/>
    </xsl:template>

    <xsl:template match="set">
        <h3>
            <xsl:apply-templates select="identification"/>
        </h3>
        <xsl:apply-templates select="description"/>
        <xsl:apply-templates select="items"/>
    </xsl:template>

    <!-- SPATIAL UNIT -->
    <xsl:template match="spatialUnit">
        <xsl:apply-templates select="identification"/>
        <xsl:apply-templates select="description"/>
        <xsl:apply-templates select="//periods"/>
        <xsl:apply-templates select="//properties"/>
        <xsl:apply-templates select="//links"/>
        <xsl:apply-templates select="//notes"/>
        <!--MAP-->
        <xsl:apply-templates select="//coordinates"/>
    </xsl:template>

    <!-- PROCESS DATA NODES -->
    <xsl:template match="identification">
        <div>
            <xsl:value-of select="label"/>
            <xsl:apply-templates select="alias"/>
        </div>
    </xsl:template>

    <xsl:template match="items">
        <table class="table table-striped" id="ochreTable">
            <!--table table-striped order-table sortable-->
            <thead id="ochreTableColumns">
                <tr>
                    <!--NAME AND DESCRIPTION ARE DEFAULT COLUMNS-->
                    <th>Name</th>
                    <th>Description</th>

                    <!--PROPERTIES AS SPECIFIED IN OCHRE ARE THE REMAINING COLUMNS, IN ORDER-->
                    <!-- Create headings. -->
                    <xsl:for-each select="//items/*[1]">
                        <xsl:for-each select="properties/property">
                            <th>
                                <xsl:value-of select="label"/>
                            </th>
                        </xsl:for-each>
                    </xsl:for-each>
                </tr>
            </thead>
            <tbody id="ochreTableBody">
                <!-- Create table body. --> </tbody>
        </table>
    </xsl:template>

    <xsl:template match="alias">
        <span class="alias">(<xsl:value-of select="."/>)</span>
    </xsl:template>

    <xsl:template match="coordinates">
        <div id="map"/>
    </xsl:template>

    <xsl:template match="properties">
        <h4>Properties</h4>
        <xsl:apply-templates select="property"/>
    </xsl:template>

    <xsl:template match="property">
        <ul>
            <li>
                <span>
                    <xsl:value-of select="label"/>
                </span>
                <xsl:text> : </xsl:text>
                <span>
                    <xsl:value-of select="value"/>
                </span>
                <xsl:apply-templates select="property"/>
            </li>
        </ul>

    </xsl:template>

    <xsl:template match="notes">
        <h4>Notes</h4>
        <xsl:apply-templates select="note"/>
    </xsl:template>

    <xsl:template match="note">
        <xsl:for-each select=".">
            <xsl:value-of select="."/>
        </xsl:for-each>
    </xsl:template>

    <xsl:template match="links">
        <h4>Resource links</h4>
        <xsl:for-each select="resource">
            <p>
                <xsl:value-of select="."/>
            </p>
        </xsl:for-each>
    </xsl:template>

    <xsl:template match="resource">
        <xsl:apply-templates select="identification"/>
        <xsl:apply-templates select="description"/>
        <xsl:apply-templates select="properties"/>
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <img src="https://pi.lib.uchicago.edu/1001/org/ochre/{@uuid}&amp;preview"/>
                </div>
            </div>
        </div>
    </xsl:template>

    <xsl:template match="periods">
        <h4>Periods</h4>
        <xsl:for-each select="period">
            <p>
                <xsl:value-of select="."/>
            </p>
        </xsl:for-each>
    </xsl:template>

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
