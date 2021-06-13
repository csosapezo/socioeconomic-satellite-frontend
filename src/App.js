import React from 'react'
import Sidebar from './components/sidebar'
import Map from './components/map'
import './App.css'
import {doSearchImages} from "./dataAccess/searchImages";

class App extends React.Component {

  constructor(props) {
      super(props);

      let initialState = {
          "north": 0,
          "south": 0,
          "west": 0,
          "east": 0
      };

      this.state = {sidebar_coords:  initialState,
                    clean: true,
                    images: [],
                    selectedIdx: -1};
  }

  hoverEnter = (idx) => {

      this.setState({selectedIdx: idx})
  }

  squareCoords = (coords) => {
      console.log(coords)

      let newState = {
          "north": coords._northEast.lat,
          "south": coords._southWest.lat,
          "west": coords._southWest.lng,
          "east": coords._northEast.lng
      };

      this.setState(() => {return ({sidebar_coords: newState, clean: false})});
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
      this.setState(() => {return ({sidebar_coords: cleanState, clean: true, selectedIdx: -1, images: []})});

      document.getElementById("top").className = "xy-button"
      document.getElementById("right").className = "xy-button"
      document.getElementById("bottom").className = "xy-button"
      document.getElementById("left").className = "xy-button"

      return null;
  }

  selectImage = () => {
      return null;
  }

  selectArea = () => {
      const top = document.getElementById("top").value
      const bottom = document.getElementById("bottom").value
      const left = document.getElementById("left").value
      const right = document.getElementById("right").value

      doSearchImages(top, bottom, left, right).then((res) => {
          console.log(res.data)
          this.setState({images: res.data.images})
      } )

      return null
  }

  render() {

    return (
        <div>
            <Sidebar coords={this.state.sidebar_coords}
                     cleanAll={this.cleanAll}
                     selectImage={this.selectImage}
                     selectArea={this.selectArea}
                     images={this.state.images}
                     hoverEnter={this.hoverEnter}/>
            <Map squareCoords={this.squareCoords}
                 cleanRectangle={this.state.clean}
                 selectedIdx={this.state.selectedIdx}
                 images={this.state.images}/>
            <h6 className="footer"> </h6>
        </div>
    )
  }
}

export default App;
