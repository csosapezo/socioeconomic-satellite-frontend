import React from 'react'
import './infobox.css'
import "@fontsource/montserrat"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

class Infobox extends React.Component {
    render() {
        return (
            <div class="info">
                <div className="info-title">
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Instrucciones de uso
                </div>
                <div class="infobox">
                    <ul>
                        <li>Seleccione un área de interés</li>
                        <li>Elige una imagen para procesar</li>
                        <li>Espere a que se genere el resultado</li>
                        <li>Consulte la imagen</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Infobox;