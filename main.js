
  var map = L.map('map').setView([44, 15],7);
  var url = 'https://services.bioportal.hr/dzzpnpis/ows?SERVICE=WMS&';
  var url1 = 'https://services.bioportal.hr/dzzpnpis/ows?SERVICE=WMS&';
  var url2 = 'http://services.bioportal.hr:80/dzzpnpis/ows?SERVICE=WMS& ';
  var url3 = 'http://services.bioportal.hr:80/dzzpnpis/ows?SERVICE=WMS& ';
  var url4 = 'https://services.bioportal.hr/dzzpnpis/ows?SERVICE=WMS& ';
  
  
  var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 14,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  });
  osm.addTo(map);
  
  var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});  

var wms1=L.tileLayer.betterWms(url, {
  layers: 'zasticeni_fosili',
  transparent: true,
  format: 'image/png'
}).addTo(map);

      
   
      
   var wms2=  L.tileLayer.betterWms(url1,{
    layers:'world_heritage',
        transparent: true,
        format: 'image/png'
      }).addTo(map);
      var wms3=   L.tileLayer.betterWms(url2, {
        layers: 'ronjenje_tocke',
        transparent: true,
        format: 'image/png'
      }).addTo(map);
      var wms4=   L.tileLayer.betterWms(url3, {
        layers: 'atrakcije_linije',
        transparent: true,
        format: 'image/png'
      }).addTo(map);
      var wms5=   L.tileLayer.betterWms(url4, {
        layers: 'vodjene_ture',
        transparent: true,
        format: 'image/png'
      }).addTo(map);
var baseMaps = {
  "OpenStreetMap": osm,
  "Satelit": Esri_WorldImagery,
  
};
var overlayMaps = {

"Dinosauri":wms1,
"Nacionalni parkovi":wms2,
"Ronjenje":wms3,
"Atrakcije":wms4,
"Vođene ture":wms5
};
L.control.layers(baseMaps, overlayMaps).addTo(map);



