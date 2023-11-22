import {Map,tileLayer} from "leaflet";

const map = new Map("map").setView([19.2921, -99.6532], 10);
tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);