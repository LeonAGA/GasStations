class UI {
   
    constructor() {

        // Make an  instance of the API.
         this.api = new API();
         
         //Create the layergroup.
         this.markers = new L.LayerGroup();
        // Start the map.
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

    showGasStations(){

        this.api.obtainData()
        .then(data => {
            const result = data.responseJSON.results;
            
            //Call the function to show the pins.
            this.showPins(result);
        });
    }

    showPins(data){
        //Clean the markers.
        this.markers.clearLayers();
        
        //go throught the gasStations
        data.forEach(element => {
            const {latitude, longitude, calle, regular, premium} = element;

            //Create popup
            const popUpOptions = L.popup()
                .setContent(`<p>Street: ${calle}</p>
                             <p><b>Regular:</b> ${regular}</p>   
                             <p><b>Premium:</b> ${premium}</p> 
                `);
            

            //Add pin
            const marker = new L.marker([
                parseFloat(latitude),
                parseFloat(longitude)
            ]).bindPopup(popUpOptions);

            this.markers.addLayer(marker);
        }); 
        this.markers.addTo(this.map);
    }

       filterResults(filter){
        
        this.api.obtainData()
        .then(data => {
            const result = data.responseJSON.results;
            
               //filtering Data
               const filtered = result.filter(element => element.calle.indexOf(filter) !== -1);
               
               //Call the function to show the pins.
               this.showPins(filtered);
        });

    }

    

}