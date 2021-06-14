import {useMapEvents} from "react-leaflet";
import L from 'leaflet'
import {useEffect} from "react";

function getBounds(center) {
    return L.latLng(center).toBounds(3000)
}

function GetSquare(props){
    let rect = null;
    const map = useMapEvents({
        click: (e) => {

            let aoi = document.getElementById("aoi");

            if (aoi.classList.contains("invisible") || aoi.classList.contains("blocked")) {
                return;
            }

            map.eachLayer(function (layer) {
                if (layer._url !== "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png") {
                    map.removeLayer(layer);
                }
            });

            let bounds = getBounds(e.latlng);
            rect = new L.Rectangle(bounds, {color: "#f64c72ff"});
            rect.addTo(map);
            props.handleFunc(bounds);
        },
    })

    useEffect(() => {
        if (props.clean) {
            map.eachLayer(function (layer) {
                if (layer._url !== "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png") {
                    map.removeLayer(layer);
                }
            });
        }

        if (props.selectedIdx !== -1) {


            map.eachLayer(function (layer) {
                if (layer._url !== "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png") {
                    map.removeLayer(layer);
                }
            });

            let bounds = props.images[props.selectedIdx].bounding_box
            const coords = [[bounds.bottom, bounds.left], [bounds.top, bounds.right]];


            let rect = new L.Rectangle(coords, {color: "#f64c72ff"});
            rect.addTo(map);
        }
    })

    return null;
}

export default GetSquare;