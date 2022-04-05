<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <!--The following is a catch-and-kill template.-->
    <xsl:template match="text()"/>
    <xsl:template match="/">
        <html>
            <body>
                <xsl:apply-templates/>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="fish">
        <xsl:for-each select=".">
                <h4><xsl:value-of select="nickname"/></h4>
        </xsl:for-each>
    </xsl:template>
    <xsl:template match="dog">
        <xsl:for-each select=".">
            <xsl:value-of select="nickname"/><br/>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>
