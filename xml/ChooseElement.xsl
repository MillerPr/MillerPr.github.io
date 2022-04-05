<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:template match="/">
        <html>
            <body>
                <xsl:for-each select="/aquarium/tank">
                    <xsl:choose>
                        <xsl:when test="@n = '0'">
                            <p>First Tank is known as <xsl:value-of select="tankName"/></p>
                        </xsl:when>
                        <xsl:when test="@n = '1'">
                            <p>Second Tank is known as <xsl:value-of select="tankName"/></p>
                        </xsl:when>
                        <xsl:when test="@n = '2'">
                            <p>Third Tank is known as <xsl:value-of select="tankName"/></p>
                        </xsl:when>
                        <xsl:otherwise>
                            <p>Another Tank has been identified: <xsl:value-of select="tankName"/></p>
                        </xsl:otherwise>
                    </xsl:choose>
                </xsl:for-each>

            </body>
        </html>
    </xsl:template>

    <!--The following is a catch-and-kill template that will prevent all text from being passes to the HTML output unless specifically matched using a template.-->
    <!--<xsl:template match="text()"> </xsl:template>-->

</xsl:stylesheet>
