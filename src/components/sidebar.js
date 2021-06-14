import React from 'react'
import './sidebar.css'
import Infobox from "./sidebar_items/infobox";
import logo from "../images/header.png";
import AOI from "./sidebar_items/aoi";
import Imagelist from "./sidebar_items/imagelist";

class Sidebar extends React.Component {
    render() {
        return (
            <div class="sidebar">
                <img src={logo} alt="Visualización de imágenes" />
                <Infobox/>
                <AOI bounds={this.props.coords} cleanAll={this.props.cleanAll}
                     selectImage={this.props.selectArea}/>
                <Imagelist cleanAll={this.props.cleanAll}
                           images={this.props.images}
                           hoverEnter={this.props.hoverEnter}
                           selectImage={this.props.selectImage}/>
            </div>
        )
    }
}

export default Sidebar;