https://ochre.lib.uchicago.edu/ochre?&xquery=for $q in input()/ochre[@uuidBelongsTo='0c0aae37-7246-495b-9547-e25dbf5b99a3']/set[@uuid='7ccec23f-d351-4f01-b1bf-ac23695fc691']/items return <result>{for $s in $q/concept return <item> {$s/@uuid} {$s/identification/abbreviation} {$s/identification/label} {$s/description}</item>}</result>

for $q in input()
/ochre[@uuidBelongsTo='0c0aae37-7246-495b-9547-e25dbf5b99a3']
/set[@uuid='7ccec23f-d351-4f01-b1bf-ac23695fc691']
/items
return
<result>
  {
    for $s in $q/concept
      return
      <item>
        {$s/@uuid}
        {$s/identification/abbreviation}
        {$s/identification/label}
        {$s/description}
      </item>
  }
</result>
