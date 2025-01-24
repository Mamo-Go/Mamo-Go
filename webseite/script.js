document.addEventListener('DOMContentLoaded', function () {
    const location = [51.36852731894303, 7.2490055211784306];
    const map = L.map('map').setView(location, 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const marker = L.marker(location).addTo(map);
    marker.bindPopup("<b>Hier Sind Wir :)</b>").openPopup();
});
