import React from 'react'
import './sidebar.css'
import Infobox from "./sidebar_items/infobox";
import logo from "../images/header.png";

class Sidebar extends React.Component {
    render() {
        return (
            <div class="sidebar">
                <img src={logo} alt="Visualización de imágenes" />
                <Infobox/>
            </div>
        )
    }
}

export default Sidebar;