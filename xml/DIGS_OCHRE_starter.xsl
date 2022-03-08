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
    <xsl:template match="spatialUnit"> </xsl:template>

    <!-- PROCESS DATE NODES -->
    <xsl:template match="identification">
        <div>
            <xsl:value-of select="label"/>
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
                <!-- Create table body. -->
                
            </tbody>
        </table>
    </xsl:template>

    <xsl:template match="alias"> </xsl:template>

    <xsl:template match="context"> </xsl:template>

    <xsl:template match="coordinates"> </xsl:template>

    <xsl:template match="reverseLinks"> </xsl:template>

    <xsl:template match="property"> </xsl:template>

    <xsl:template match="notes"> </xsl:template>

    <xsl:template match="links"> </xsl:template>

    <xsl:template match="resource"> </xsl:template>

    <xsl:template match="periods"> </xsl:template>

    <!-- This template creates a links list of sub-items. -->
    <xsl:template name="sUnitLinks"> </xsl:template>

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
