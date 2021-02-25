function initMap(){
    let map = new google.maps.Map(document.getElementById('mapa'), {
        center: {
            lat: 19.51960988029026, 
            lng: -99.05110547362052
        },
        zoom: 16,
    })
}

initMap();