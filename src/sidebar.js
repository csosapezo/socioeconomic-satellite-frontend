import React from 'react'
import './sidebar.css'
import Infobox from "./infobox";

class Sidebar extends React.Component {
    render() {
        return (
            <div class="sidebar">
                <Infobox/>
            </div>
        )
    }
}

export default Sidebar;