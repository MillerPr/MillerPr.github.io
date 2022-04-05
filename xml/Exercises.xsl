<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <!--EXERCISE 01-->
    <!--<xsl:template match="/">
        <html>
            <body>
                <h1>
                    <xsl:value-of select="/aquarium/tank[@n = '2']/tankName"/>
                </h1>
                <xsl:for-each select="/aquarium/tank[@n= '2']/supervisors/supervisor">
                    <xsl:value-of select="firstName"/><xsl:text> </xsl:text>
                    <xsl:value-of select="lastName"/><xsl:text>: </xsl:text>
                    <xsl:value-of select="shift"/><br/>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>-->

    <!--<xsl:template match="/">
        <html>
            <body>
                <xsl:for-each select="/aquarium/tank[@n='2']">
                    <h1>
                        <xsl:value-of select="tankName"/>
                    </h1>
                    <xsl:for-each select="supervisors/supervisor">
                        <xsl:value-of select="firstName"/>
                        <xsl:text> </xsl:text>
                        <xsl:value-of select="lastName"/>
                        <xsl:text>: </xsl:text>
                        <xsl:value-of select="shift"/>
                        <br/>
                    </xsl:for-each>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>-->


    <!--EXERCISE 02-->
    <!--<xsl:template match="/">
        <html>
            <body>
                <xsl:for-each select="//fish">
                    <xsl:sort select="nickname"/>
                    <xsl:value-of select="nickname"/><xsl:text>: </xsl:text>
                    <xsl:value-of select="birthday"/><br/>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>-->

    <!--EXERCISE 03-->
    <xsl:template match="/">
        <xsl:for-each select="//shift[@n = '1'] | //shift[@n = '2']">
            <xsl:sort select="."/>
            <xsl:value-of select="../lastName"/><xsl:text>: </xsl:text>
            <xsl:value-of select="."/>
            <br/>
        </xsl:for-each>
    </xsl:template>
    <xsl:template match="text()"/> 

    <!--EXERCISE 03 ALTERNATE ANSWER, USING !=?-->
    <!--<xsl:template match="/">
        <html>
            <body>
                <xsl:for-each select="//shift[@n != '3']">
                    <xsl:sort select="."/>
                    <xsl:value-of select="../lastName"/><xsl:text>: </xsl:text>
                    <xsl:value-of select="."/><br/>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>-->
    
    
</xsl:stylesheet>
