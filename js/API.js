class UI {
    constructor() {

         // Iniciar el mapa
         this.map = this.initializeMap();

    }

    initializeMap() {
         // Inicializar y obtener la propiedad del mapa
         const map = L.map('map').setView([19.390519, -99.3739778], 4);
         const mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
         L.tileLayer(
             'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
             attribution: '&copy; ' + mapLink + ' Contributors',
             maxZoom: 18,
             }).addTo(map);
         return map;

    }
}