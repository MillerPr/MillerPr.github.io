<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <html>
            <body>
                <h2>Aquarium Information</h2>
                <xsl:for-each select="/aquarium/tank">
                    <h3>
                        <xsl:value-of select="tankName"/>
                    </h3>
                    <p>Water type: <xsl:value-of select="waterType"/></p>
                    <p>Fish inventory:</p>
                    <table>
                        <xsl:for-each select="fishInventory/fish">
                            <tr>
                                <td><xsl:value-of select="nickname"/></td>
                                <td>
                                    <xsl:value-of select="taxon"/>
                                </td>
                                <td>
                                    <xsl:value-of select="birthday"/>
                                </td>
                            </tr>
                        </xsl:for-each>
                    </table>
                    <p>Supervisors:</p>
                    <table>
                        <xsl:for-each select="supervisors/supervisor">
                            <tr>
                                <td>
                                    <xsl:value-of select="lastName"/>
                                </td>
                                <td>
                                    <xsl:value-of select="firstName"/>
                                </td>
                                <td>
                                    <xsl:value-of select="shift"/>
                                </td>
                            </tr>
                        </xsl:for-each>
                    </table>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="text()"> </xsl:template>
</xsl:stylesheet>
