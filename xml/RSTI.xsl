<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0" 
    xmlns:ino="http://namespaces.softwareag.com/tamino/response2"
    xmlns:xql="http://metalab.unc.edu/xql"
    xmlns:xq="http://namespaces.softwareag.com/tamino/XQuery/result"
    xmlns:a="http://www.w3.org/1999/xhtml">
    <!-- HTML file is output in primary GitHub directory so it can access common css/js/media files. -->
    <xsl:output method="html" version="5.0" encoding="UTF-8"/>
    <xsl:template match="text()"/>
    <xsl:template match="set">
        <html>
            <head>
                <!-- Required meta tags -->
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="shortcut icon" type="image/jpg" href="https://ochre.lib.uchicago.edu/resources/OCHRE_tree_nocolor.png"/>
                <!-- Bootstrap CSS -->
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
                <link rel="stylesheet" href="css/millerpr.css"/>
                <script src="https://code.jquery.com/jquery-3.5.0.js"/>
                <title>DIGS XML</title>
            </head>
            <body>
                <div id="nav-placeholder"/>
                <div id="subHead" class="container-fluid">
                    <div class="row">
                        <div class="col d-none d-md-block">
                            <h2 id="splashTitle" class="text-end mx-5 my-4">DIGS — Data Publication</h2>
                        </div>
                    </div>
                </div>
                <div class="container mt-4">
                    <h1>
                        <xsl:value-of select="identification/label"/>
                    </h1>
                    <h2>
                        <xsl:value-of select="description"/>
                    </h2>
                    <p>Provided by: <xsl:value-of select="project/identification/label"/> </p>
                    <xsl:apply-templates select="items"/>
                </div>

                <footer id="footerPlaceholder" class="d-none d-md-block footer container-fluid mt-auto py-3 bg-light"/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"/>
                <script src="js/nav_dc.js"/>
                <script src="js/footer.js"/>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="items">
        
        <div class="container">
            <table class="table table-striped order-table" id="ochreTable">
                <thead class="thead-dark" id="ochreTableColumns">
                    <tr>
                        <th style="text-align: left; width: 30%">Name</th>
                        <th style="text-align: left; width: 30%">Description</th>
                    </tr>
                </thead>
                <tbody id="ochreTableBody">
                    <xsl:for-each select="text">
                        <tr>
                            <td>
                                <xsl:value-of select="identification/label"/>
                            </td>
                            <td>
                                <xsl:value-of select="description"/>
                            </td>
                        </tr>
                    </xsl:for-each>
                </tbody>
            </table>
        </div>
    </xsl:template>
</xsl:stylesheet>
