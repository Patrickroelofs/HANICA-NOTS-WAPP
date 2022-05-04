window.mapbox = {
    init: (dataUrl) => {
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
                cluster: true,
                clusterMaxZoom: 14,
                clusterRadius: 50
            });
            map.addLayer({
                id: 'clusters',
                type: 'circle',
                source: 'listings',
                filter: ['has', 'point_count'],
                paint: {
                    'circle-color': [
                        'step',
                        ['get', 'point_count'],
                        '#a0a0a0',
                        100,
                        '#848484',
                        400,
                        '#424242',
                        750,
                        '#222222'
                    ],
                    'circle-radius': [
                        'step',
                        ['get', 'point_count'],
                        20,
                        100,
                        30,
                        750,
                        40
                    ]
                }
            });

            map.addLayer({
                id: 'cluster-count',
                type: 'symbol',
                source: 'listings',
                filter: ['has', 'point_count'],
                layout: {
                    'text-field': '{point_count_abbreviated}',
                    'text-size': 16,
                },
                paint: {
                    "text-color": "#ffffff"
                }
            });

            map.addLayer({
                id: 'points',
                type: 'circle',
                filter: ['!', ['has', 'point_count']],
                source: 'listings',
                paint: {
                    'circle-color': '#000',
                    'circle-radius': 6,
                }
            });
        })
    },
    updateData: url => {
        map.getSource('listings').setData(url);
    }
}