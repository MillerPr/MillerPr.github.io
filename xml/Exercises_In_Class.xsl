<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <!--EXERCISES IN CLASS-->
    <xsl:template match="/">
        <html>
            <body>
                <xsl:for-each select="//shift[@n = '1']|//shift[@n = '2']">
                    <xsl:sort select="."/>
                    <xsl:value-of select="../lastName"/>:
                    <xsl:value-of select="."/><br/>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
