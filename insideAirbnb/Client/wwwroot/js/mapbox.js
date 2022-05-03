window.mapbox = {
    init: () => {
        mapboxgl.accessToken = 'pk.eyJ1IjoicGF0cmlja3JvZWxvZnMiLCJhIjoiY2wyN3k3MHR2MDQ1NjNrbDNxd3B4ZTliayJ9.pXSKWIwd8K__9fBqrz7BCw';
        map = new mapboxgl.Map({
            container: 'mapBox',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [4.902318081500600, 52.37851665631290],
            zoom: 12,
        })
    }
};