import React from 'react'
import './map.css'
import 'leaflet/dist/leaflet.css';
import ImageLayers from "./map_functions/image_layers";
import {MapContainer, TileLayer} from 'react-leaflet'
import GetSquare from "./map_functions/square";

const position = [-12.0453,  -77.0311]

function Map() {
    return (
        <div class="content">
            <MapContainer center={position} zoom={11} scrollWheelZoom={false} style={{height: "100vh", width: "150vh"}}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ImageLayers/>
                <GetSquare/>
            </MapContainer>
        </div>
    )
}

export default Map;