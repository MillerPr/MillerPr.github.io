<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">


    <xsl:template match="/">
        <html>
            <body>
                <h2>Aquarium Information</h2>
                <!--From line 10 through line 34 should be repeated for each tank.-->
                
                    <h3>
                        <!--Replace this comment with the tank name.-->
                    </h3>
                    <p>Water type: <!--Replace this comment with the water type.--></p>
                    <p>Fish inventory:</p>
                    <table>
                        <!--The following rows need to be repeated for each fish.-->
                            <tr>
                                <td><!--Replace this comment with the nickname--></td>
                                <td><!--Replace this comment with the taxon.--></td>
                                <td><!--Replace this comment with the birthday.--></td>
                            </tr>
                        
                    </table>
                    <p>Supervisors:</p>
                    <table>
                        <!--The following rows need to be repeated for each supervisor.-->
                            <tr>
                                <td><!--Replace this comment with the last name.--></td>
                                <td><!--Replace this comment with the first name.--></td>
                                <td><!--Replace this comment with the shift.--></td>
                            </tr>
                        
                    </table>
                <xsl:apply-templates/>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="text()"> </xsl:template>



</xsl:stylesheet>
