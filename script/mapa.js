<script src="https://maps.googleapis.com/maps/api/js?key=SUA_CHAVE_API&callback=initMap" async defer></script>

        // Função de inicialização do mapa
        function initMap() {
            // Coordenadas para o centro do mapa (latitude e longitude)
            var myLatLng = { lat: -23.550520, lng: -46.633308 };

            // Opções do mapa
            var mapOptions = {
                zoom: 12,
                center: myLatLng
            };

            // Crie um novo mapa no contêiner com o ID 'map'
            var map = new google.maps.Map(document.getElementById('map'), mapOptions);

            // Adicione um marcador ao mapa
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'Meu Marcador'
            });
        }