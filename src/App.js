import React from 'react'
import Sidebar from './components/sidebar'
import Map from './components/map'
import './App.css'

class App extends React.Component {

  constructor(props) {
      super(props);

      let initialState = {
          "north": 0,
          "south": 0,
          "west": 0,
          "east": 0
      };

      this.state = {sidebar_coords:  initialState};
  }

  squareCoords = (coords) => {
      console.log(coords)

      let newState = {
          "north": coords._northEast.lat,
          "south": coords._southWest.lat,
          "west": coords._southWest.lng,
          "east": coords._northEast.lng
      };

      this.setState(() => {return ({sidebar_coords: newState})});
      console.log(this.state.sidebar_coords)

      document.getElementById("top").className = "xy-button-active"
      document.getElementById("right").className = "xy-button-active"
      document.getElementById("bottom").className = "xy-button-active"
      document.getElementById("left").className = "xy-button-active"

      return null;
  }

  cleanAll = () => {
      const cleanState = {
          "north": 0,
          "south": 0,
          "west": 0,
          "east": 0
      };
      this.setState({sidebar_coords: cleanState})

      document.getElementById("top").className = "xy-button"
      document.getElementById("right").className = "xy-button"
      document.getElementById("bottom").className = "xy-button"
      document.getElementById("left").className = "xy-button"

      return null;
  }

  selectImage = () => {
      return null;
  }

  render() {

    return (
        <div>
            <Sidebar coords={this.state.sidebar_coords} cleanAll={this.cleanAll} selectImage={this.selectImage}/>
            <Map squareCoords={this.squareCoords}/>
            <h6 className="footer"> </h6>
        </div>
    )
  }
}

export default App;
