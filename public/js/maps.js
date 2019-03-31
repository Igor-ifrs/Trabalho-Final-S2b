let map;

function initMap() {

    let styleArray = [{
        featureType: 'all',
        stylers: [{
            saturation: -80
        }]
    }, {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [{
                hue: '#00ffee'
            },
            {
                saturation: 50
            }
        ]
    }, {
        featureType: 'poi.business',
        elementType: 'labels',
        stylers: [{
            visibility: 'off'
        }]
    }];

    let mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(-30.06408453563119, -51.15950023050817),
        styles: styleArray
    };

    let map = new google.maps.Map(document.getElementById('mapaHome'),
        mapOptions);






    map.data.loadGeoJson('http://localhost:3000/api/?pesquisa=mapaLocal', null, function (features) {

        let markers = features.map(function (feature) {
            let g = feature.getGeometry();
            let nome = feature.getProperty('Nome');
            let tel = feature.getProperty('Telefone');
            let txx = `<div>${nome}</div><div>${tel}</div>`;
            let marker = new google.maps.Marker({
                'position': g.get(0),
                'title': nome
            });

            let infowindow = new google.maps.InfoWindow({
                content: txx
            });

            marker.addListener('click', function () {
                map.setCenter(marker.getPosition());
                infowindow.open(map, marker);
            });
            
            return marker;

        });




        let markerCluster = new MarkerClusterer(map, markers, {
            imagePath: 'https://cdn.rawgit.com/googlemaps/js-marker-clusterer/gh-pages/images/m'
        });
    });



    map.data.setStyle(function (feature) {
        return {
            icon: feature.getProperty('icon'),
            visible: false
        };
    });
    /*
        map.addListener('center_changed', function () {
            console.log(map.getCenter().lat());
            console.log(map.getCenter().lng());
        });
    */
}
