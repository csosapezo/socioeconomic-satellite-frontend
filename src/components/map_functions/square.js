import {useMapEvents} from "react-leaflet";
import L from 'leaflet'

function getBounds(center) {
    return L.latLng(center).toBounds(10000)
}

function GetSquare(props){
    let rect = null;
    const map = useMapEvents({
        click: (e) => {

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
    return null;
}

export default GetSquare;