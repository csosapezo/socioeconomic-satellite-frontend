import React from 'react'
import './imagelist.css'
import '@fontsource/montserrat'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImage} from "@fortawesome/free-solid-svg-icons";
import { Scrollbars } from 'react-custom-scrollbars';

class ImageRow extends React.Component {

    hoverImageEnter = () => {
        console.log(this.props.idx)

        let prevSelected = document.getElementsByClassName("selected")[0]

        if (typeof prevSelected !== 'undefined') {
            prevSelected.classList.remove("selected")
        }

        let thisRow = document.getElementById(this.props.idx)
        thisRow.classList.add("selected")

        this.props.hoverImageEnter(this.props.idx)
    }

    render() {
       return(<td id={this.props.idx} onClick={this.hoverImageEnter}>{this.props.data.name}</td>)
    }
}

class Imagelist extends React.Component {

    selectImage = () => {
        this.props.selectImage()
        this.props.cleanAll()
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

        return this.props.images.map((entry, index) => {
            return (
                <tr key={index}>
                    <ImageRow data={entry} idx={index} hoverImageEnter={this.props.hoverEnter}/>
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
                        <tbody id="tbody" className='t_Body'>
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