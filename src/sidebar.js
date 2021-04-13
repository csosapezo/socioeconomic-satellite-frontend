import React from 'react'
import './sidebar.css'

class Sidebar extends React.Component {
    render() {
        return (
            <div class="sidebar">
                <div class="info-box">
                    <p id="info-text"> Descarga de máscaras e imágenes </p>
                    <p id="info-text2"> Por favor, realice la búsqueda y selección de alguna imagen debajo</p>
                    <button id="btn3" className="text-white btn3">Descargar Máscara
                        (TIF)
                    </button>
                    <button id="btn4" className="text-white btn4">Descargar Máscara
                        (PNG)
                    </button>
                    <button id="btn6" className="text-white btn6">Descargar Imagen (PNG)
                    </button>
                    <button id="btn5" className="text-white btn5">Descargar Imagen (TIF)
                    </button>
                </div>
            </div>
        )
    }
}

export default Sidebar;