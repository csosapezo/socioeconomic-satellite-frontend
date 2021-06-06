import {useMapEvents} from "react-leaflet";
import L from 'leaflet'
import {useEffect} from "react";

function getBounds(center) {
    return L.latLng(center).toBounds(10000)
}

function GetSquare(props){
    let rect = null;
    const map = useMapEvents({
        click: (e) => {

            let aoi = document.getElementById("aoi");

            if (aoi.classList.contains("invisible")) {
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
        console.log(props.clean)
        if (props.clean) {
            map.eachLayer(function (layer) {
                if (layer._url !== "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png") {
                    map.removeLayer(layer);
                }
            });
        }
    })

    return null;
}

export default GetSquare;