window.mapbox = {
    init: (dotnetReference, listingsURL, neighbourhoodsURL) => {
        mapboxgl.accessToken = 'pk.eyJ1IjoicGF0cmlja3JvZWxvZnMiLCJhIjoiY2wyN3k3MHR2MDQ1NjNrbDNxd3B4ZTliayJ9.pXSKWIwd8K__9fBqrz7BCw';
        map = new mapboxgl.Map({
            container: 'mapBox',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [4.88, 52.36],
            zoom: 11,
        });
        map.on('load', () => {
            map.addSource('listings', {
                type: 'geojson',
                data: listingsURL,
                cluster: true,
                clusterMaxZoom: 12,
                clusterRadius: 45
            });

            map.addSource('neighbourhoods', {
                type: 'geojson',
                data: neighbourhoodsURL,
            })

            map.addLayer({
                id: 'points',
                type: 'circle',
                filter: ['!', ['has', 'point_count']],
                source: 'listings',
                paint: {
                    'circle-color': '#000000',
                    'circle-radius': 3,
                }
            });

            map.addLayer({
                id: 'neighbourhoods',
                type: 'fill',
                source: 'neighbourhoods',
                paint: {
                    'fill-color': 'rgba(0, 0, 0, 0.05)',
                    'fill-outline-color': 'rgba(0, 0, 0, 1)'
                }
            })

            map.addLayer({
                id: 'clusters',
                type: 'circle',
                source: 'listings',
                filter: ['has', 'point_count'],
                paint: {
                    'circle-color': [
                        'step',
                        ['get', 'point_count'],
                        '#FFCD56',
                        100,
                        '#FFB003',
                        650,
                        '#FF8300'
                    ],
                    'circle-radius': [
                        'step',
                        ['get', 'point_count'],
                        25,
                        100,
                        35,
                        750,
                        50
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
                    'text-font': ['Arial Unicode MS Bold'],
                    'text-size': 12
                }
            });
            
            map.addControl(new mapboxgl.NavigationControl());

            const popup = new mapboxgl.Popup({
                closeButton: false,
                closeOnClick: false
            })

            map.on('mousemove', 'points', (e) => {
                popup
                    .setLngLat(e.features[0].geometry.coordinates)
                    .setHTML(`<div>${e.features[0].properties.Name} by ${e.features[0].properties.HostName} $<span>${e.features[0].properties.Price}<span></div>`)
                    .addTo(map)
                
            });

            map.on('click', 'points', (e) => {
                const id = e.features[0].properties.Id;
                dotnetReference.invokeMethodAsync("PointClicked", id);
            })

            map.on('mouseenter', 'points', function () {
                map.getCanvas().style.cursor = 'pointer';
            });

            map.on('mouseleave', 'points', function () {
                map.getCanvas().style.cursor = '';
                popup.remove();
            });

            map.on('idle', function () {
                map.resize()
            })
        })
    },
    updateUrl: url => {
        map.getSource('listings').setData(url);
    }
}