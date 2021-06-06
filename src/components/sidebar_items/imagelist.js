import React from 'react'
import './imagelist.css'
import '@fontsource/montserrat'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImage} from "@fortawesome/free-solid-svg-icons";
import { Scrollbars } from 'react-custom-scrollbars';

class Imagelist extends React.Component {

    selectImage = () => {
        let aoi = document.getElementById("aoi")
        let imagelist = document.getElementById("imagelist")
        aoi.classList.remove("invisible")
        imagelist.classList.add("invisible")
        return null;
    }

    returnToMain = () => {
        this.props.cleanAll()
        let aoi = document.getElementById("aoi")
        let imagelist = document.getElementById("imagelist")
        aoi.classList.remove("invisible")
        imagelist.classList.add("invisible")
        return null;
    }

    render() {
        return (
            <div class="imagelist invisible" id="imagelist">
                <div className="list-title">
                    <FontAwesomeIcon icon={faImage} />
                    Selección de Imágenes
                </div>
                <div className="img-form">
                    <table id="img-table">
                        <thead className="table-header">
                        <tr>
                            <th className="header name" >Nombre de archivo</th>
                        </tr>
                        </thead>
                        <tbody className='t_Body'>
                        <Scrollbars style={{ width: 500, height: 200 }}>
                            <tr><td>Imagen 1</td></tr>
                            <tr><td>Imagen 2</td></tr>
                            <tr><td>Imagen 3</td></tr>
                            <tr><td>Imagen 4</td></tr>
                            <tr><td>Imagen 5</td></tr>
                        </Scrollbars>
                        </tbody>
                    </table>
                </div>
                <button className="btn1" onClick={this.selectImage}>Seleccionar</button>
                <button className="btn2" onClick={this.returnToMain}>Regresar</button>
            </div>
        )
    }
}

export default Imagelist;