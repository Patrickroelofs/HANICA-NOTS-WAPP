﻿window.mapbox = {
    init: (dotnetReference, listingsURL, neighbourhoodsURL) => {
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
                data: listingsURL,
                cluster: false,
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
            
            map.addControl(new mapboxgl.NavigationControl());

            const popup = new mapboxgl.Popup({
                closeButton: false,
                closeOnClick: false
            })

            map.on('mousemove', 'points', (e) => {
                popup
                    .setLngLat(e.features[0].geometry.coordinates)
                    .setHTML(`<div>${e.features[0].properties.Name} by ${e.features[0].properties.HostName} <span>${e.features[0].properties.Price}<span></div>`)
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
        })
    },
    updateUrl: url => {
        map.getSource('listings').setData(url);
    }
}