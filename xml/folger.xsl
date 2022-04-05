<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0" xmlns:a="http://www.w3.org/1999/xhtml" xmlns:ns1="http://www.tei-c.org/ns/1.0">
    <xsl:output method="html" version="5.0" encoding="UTF-8"/>
    <xsl:template match="/">
        <html>
            <head>
                <meta charset="UTF-8"/>

                <!-- **Add Bootstrap CSS link -->
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"/>

                <!-- **Link to your CSS -->
                <link rel="stylesheet" href="css/folger.css"/>

                <!-- **Add Bootstrap JS link -->
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"/>


            </head>
            <xsl:apply-templates/>
        </html>
    </xsl:template>

    <!-- CATCH AND KILL TEMPLATE -->
    <xsl:template match="text()"> </xsl:template>

    <xsl:template match="ns1:text">
        <div class="container">
            <xsl:copy-of select="."/>
        </div>

    </xsl:template>

</xsl:stylesheet>
