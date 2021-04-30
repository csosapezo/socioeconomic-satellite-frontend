import React, {useState} from 'react'
import { useLeafletContext } from '@react-leaflet/core'
import L from 'leaflet'

function ImageLayers(){
    const [imageArray, setImageArray] = useState([]);

    const context = useLeafletContext()

    return null;
}

export default ImageLayers;