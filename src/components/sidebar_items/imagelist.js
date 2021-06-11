import React from 'react'
import './imagelist.css'
import '@fontsource/montserrat'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImage} from "@fortawesome/free-solid-svg-icons";
import { Scrollbars } from 'react-custom-scrollbars';

class Imagelist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {images: [{id: "Image 1"}, {id: "Image 2"}, {id: "Image 3"}, {id: "Image 4"}, {id: "Image 5"}, {id: "Image 6"}]}
    }

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

    renderTableData = () => {
        return this.state.images.map((entry, index) => {
            const {id} = entry //destructuring
            console.log(index)
            return (
                <tr key={index}>
                    <td>{id}</td>
                </tr>
            )
        })
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
                        <Scrollbars style={{ width: 500, height: 200 }}>
                        <tbody className='t_Body'>
                            {this.renderTableData()}
                        </tbody>
                        </Scrollbars>
                    </table>
                </div>
                <button className="btn1" onClick={this.selectImage}>Seleccionar</button>
                <button className="btn2" onClick={this.returnToMain}>Regresar</button>
            </div>
        )
    }
}

export default Imagelist;