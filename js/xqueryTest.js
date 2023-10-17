https://ochre.lib.uchicago.edu/ochre
?&xquery=for%20$q%20in%20input()/ochre[@uuid='ca126815-a753-4794-9277-cbb100942cc8']/set/items%20
return%20
<results>{$q/ancestor::*}</results>&debug

<results>%20{%20for%20$s%20in%20$q/spatialUnit[description[matches(text(),'" + searchTerm + "', 'i')]]%20return%20<item>%20{$s/@uuid}%20{$s/identification/label}%20{$s/description}</item>%20}%20</results>
