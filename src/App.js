import React from 'react'
import Sidebar from './components/sidebar'
import Map from './components/map'
import './App.css'

class App extends React.Component {
  render() {
    return (
        <div>
            <Sidebar/>
            <Map/>
            <h6 className="footer"> </h6>
        </div>
    )
  }
}

export default App;
