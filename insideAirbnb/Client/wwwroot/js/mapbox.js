window.mapbox = {
    init: (dotnetReference) => {
        mapboxgl.accessToken = 'pk.eyJ1IjoicGF0cmlja3JvZWxvZnMiLCJhIjoiY2wyN3k3MHR2MDQ1NjNrbDNxd3B4ZTliayJ9.pXSKWIwd8K__9fBqrz7BCw';
        map = new mapboxgl.Map({
            container: 'mapBox',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [4.902318081500600, 52.37851665631290],
            zoom: 12,
        });
        map.on('load', () => {
            map.addSource('listings', {
                type: 'geojson',
                data: "https://localhost:7119/listings/geojson",
                cluster: false,
            });

            map.addLayer({
                id: 'points',
                type: 'circle',
                filter: ['!', ['has', 'point_count']],
                source: 'listings',
                paint: {
                    'circle-color': '#000',
                    'circle-radius': 3,
                }
            });

            map.on('click', 'points', function (e) {
                const id = e.features[0].properties.Id;
                dotnetReference.invokeMethodAsync("PointClicked", id);
            });

            map.on('mouseenter', 'points', function () {
                map.getCanvas().style.cursor = 'pointer';
            });

            map.on('mouseleave', 'points', function () {
                map.getCanvas().style.cursor = '';
            });
        })
    },
    updateData: url => {
        map.getSource('listings').setData(url);
    }
}