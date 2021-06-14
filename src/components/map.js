import React from 'react'
import './map.css'
import 'leaflet/dist/leaflet.css';
import {MapContainer, TileLayer, LayersControl, ImageOverlay} from 'react-leaflet'
import GetSquare from "./map_functions/square";

const position = [-12.0565,  -77.1019]

function renderMasks(maskPaths, bounds) {
    return maskPaths.map((entry, index) => {
        let desc = "Nivel socioeconómico " + entry.level

        let opacity = 0.3

        if (index === 0) {
            opacity = 1
            desc = entry.level
        }


        return (
            <LayersControl.Overlay checked name={desc}>
                <ImageOverlay
                    url={"http://localhost:9997" + entry.url}
                    bounds={bounds}
                    opacity={opacity}
                />
            </LayersControl.Overlay>
        )
    })
}

function Map(props) {
    return (
        <div class="content">
            <MapContainer center={position} zoom={14} scrollWheelZoom={false} style={{height: "100vh", width: "150vh"}}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <GetSquare handleFunc={props.squareCoords} clean={props.cleanRectangle}
                           selectedIdx={props.selectedIdx}
                           images={props.images}/>
                <LayersControl position="topleft">
                    {renderMasks(props.maskArray, props.mask_bounds)}
                </LayersControl>
            </MapContainer>
        </div>
    )
}

export default Map;