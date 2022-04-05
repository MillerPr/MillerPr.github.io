

var itemTitle = {
    itemName: String(document.getElementById("itemName").value)
};
var myLatLng = {
    lat: Number(document.getElementById("lat").value), lng: Number(document.getElementById("lng").value)
};
console.log(myLatLng);
var map = L.map('map', {
    center:[myLatLng.lat, myLatLng.lng],
    zoom: 16
});
L.esri.basemapLayer('Imagery').addTo(map);
L.marker([myLatLng.lat, myLatLng.lng]).addTo(map);
// some browsers require a map redraw
setTimeout(function () {
    map.invalidateSize(true);
},
500);
