let map = L.map('tailTreatsMap').setView([51.2175483, 4.4660331], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let tailTreatsIcon = L.icon({
    iconUrl: './assets/images/icons/icon-map.png',

    iconSize:     [45, 45], // size of the icon
    iconAnchor:   [0, 47], // point of the icon which will correspond to marker's location
});

L.marker([51.2175483, 4.4660331], {icon: tailTreatsIcon}).addTo(map);

//let marker = L.marker([51.2175483, 4.4660331]).addTo(map);
