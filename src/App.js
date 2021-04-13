import React from 'react'
import Sidebar from './sidebar'
import Map from './map'
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
