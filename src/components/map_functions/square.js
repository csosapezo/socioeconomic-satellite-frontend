import {useMapEvents} from "react-leaflet";
import L from 'leaflet'

function getBounds(center) {
    return L.latLng(center).toBounds(10000)
}

function GetSquare(){
    let rect = null;
    const map = useMapEvents({
        click: (e) => {
            console.log(e.latlng);
            let bounds = getBounds(e.latlng);
            if (rect) {
                rect.removeFrom(map);
            }
            rect = new L.Rectangle(bounds, {color: "#f64c72ff"});
            rect.addTo(map);
        },
    })
    return null;
}

export default GetSquare;