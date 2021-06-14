import React from 'react'
import Sidebar from './components/sidebar'
import Map from './components/map'
import './App.css'
import {doSearchImages} from "./dataAccess/searchImages";
import {doCheckFiles} from "./dataAccess/checkFiles";
import {doPredict} from "./dataAccess/predict";

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
                    selectedIdx: -1,
                    maskArray: [],
                    mask_bounds: []};
  }

  hoverEnter = (idx) => {

      this.setState({selectedIdx: idx})
  }

  squareCoords = (coords) => {

      let newState = {
          "north": coords._northEast.lat,
          "south": coords._southWest.lat,
          "west": coords._southWest.lng,
          "east": coords._northEast.lng
      };

      this.setState(() => {return ({sidebar_coords: newState, clean: false})});

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
      this.setState(() => {return ({
          sidebar_coords: cleanState,
          clean: true,
          selectedIdx: -1,
          images: [],
          maskArray: [],
          mask_bounds: []})});

      document.getElementById("top").className = "xy-button"
      document.getElementById("right").className = "xy-button"
      document.getElementById("bottom").className = "xy-button"
      document.getElementById("left").className = "xy-button"

      document.getElementById("aoi").classList.remove("blocked")

      return null;
  }

  prediction = (path) => {
      doPredict(path).then((res) => {

          let image_data = res.data.image
          let bbDict = image_data.bounding_box
          let mask_bounds = [[bbDict.bottom, bbDict.left], [bbDict.top, bbDict.right]]
          this.setState({maskArray: image_data.masks, mask_bounds: mask_bounds})
      })
  }

  selectImage = () => {

      let path = this.state.images[this.state.selectedIdx].path
      document.getElementById("aoi").classList.remove("blocked")

      doCheckFiles(path).then((res) => {

          let image_data;

          if (res.data.is_located) {
              image_data = res.data.image
              let bbDict = image_data.bounding_box
              let mask_bounds = [[bbDict.bottom, bbDict.left], [bbDict.top, bbDict.right]]
              this.setState({maskArray: image_data.masks, mask_bounds: mask_bounds})
          } else {
              this.prediction(path)
          }

      })

      return null;
  }

  selectArea = () => {
      const top = document.getElementById("top").value
      const bottom = document.getElementById("bottom").value
      const left = document.getElementById("left").value
      const right = document.getElementById("right").value

      doSearchImages(top, bottom, left, right).then((res) => {
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
                 images={this.state.images}
                 maskArray={this.state.maskArray}
                 mask_bounds={this.state.mask_bounds}/>
            <h6 className="footer"> </h6>
        </div>
    )
  }
}

export default App;
