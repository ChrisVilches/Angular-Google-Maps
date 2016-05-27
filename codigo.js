angular.module('app', ['uiGmapgoogle-maps']);


angular.module("app")
.controller("ctrl", function($scope){

	$scope.map = {
		center: { 
			latitude: null, 
			longitude: null
		}, 
		marker: {
			coords: {
				latitude: null, 
				longitude: null
			},
			id: Date.now()			
		},
		zoom: 18,
        events: {
        	// Manejar el evento cuando se
        	// hace click en el mapa
            click: function (map, eventName, originalEventArgs) {
                var e = originalEventArgs[0];
                var lat = e.latLng.lat();
                var lon = e.latLng.lng();

                // lat = latitud de donde se hizo el click
                // lon = longitud donde se hizo el click
                
                $scope.map.marker.coords.latitude = lat;
                $scope.map.marker.coords.longitude = lon;


                $scope.$apply();
            }
        }
    } // Fin de $scope.map



    // Funcion para centrar el mapa en X,Y y poner
    // un marcador ahi. Esta posicion se puede bajar
    // desde la Base de datos, u otro lugar, etc.
    inicializarMapa = function(latitud, longitud){

    	// Coordenadas donde centrar
    	$scope.map.center.latitude = latitud;
        $scope.map.center.longitude = longitud;

    	// Coordenadas del marcador
    	$scope.map.marker.coords.latitude = latitud;
        $scope.map.marker.coords.longitude = longitud;

    }



    // Inicializar en USACH
    inicializarMapa(-33.450884, -70.685342);


});

