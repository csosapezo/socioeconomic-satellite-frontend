"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _sidebar = _interopRequireDefault(require("./components/sidebar"));

var _map = _interopRequireDefault(require("./components/map"));

require("./App.css");

var _searchImages = require("./dataAccess/searchImages");

var _checkFiles = require("./dataAccess/checkFiles");

var _predict = require("./dataAccess/predict");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "hoverEnter", function (idx) {
      _this.setState({
        selectedIdx: idx
      });
    });

    _defineProperty(_assertThisInitialized(_this), "squareCoords", function (coords) {
      var newState = {
        "north": coords._northEast.lat,
        "south": coords._southWest.lat,
        "west": coords._southWest.lng,
        "east": coords._northEast.lng
      };

      _this.setState(function () {
        return {
          sidebar_coords: newState,
          clean: false
        };
      });

      document.getElementById("top").className = "xy-button-active";
      document.getElementById("right").className = "xy-button-active";
      document.getElementById("bottom").className = "xy-button-active";
      document.getElementById("left").className = "xy-button-active";
      return null;
    });

    _defineProperty(_assertThisInitialized(_this), "cleanAll", function () {
      var cleanState = {
        "north": 0,
        "south": 0,
        "west": 0,
        "east": 0
      };

      _this.setState(function () {
        return {
          sidebar_coords: cleanState,
          clean: true,
          selectedIdx: -1,
          images: [],
          maskArray: [],
          mask_bounds: []
        };
      });

      document.getElementById("top").className = "xy-button";
      document.getElementById("right").className = "xy-button";
      document.getElementById("bottom").className = "xy-button";
      document.getElementById("left").className = "xy-button";
      document.getElementById("aoi").classList.remove("blocked");
      return null;
    });

    _defineProperty(_assertThisInitialized(_this), "prediction", function (path) {
      (0, _predict.doPredict)(path).then(function (res) {
        var image_data = res.data.image;
        var bbDict = image_data.bounding_box;
        var mask_bounds = [[bbDict.bottom, bbDict.left], [bbDict.top, bbDict.right]];

        _this.setState({
          maskArray: image_data.masks,
          mask_bounds: mask_bounds
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectImage", function () {
      var path = _this.state.images[_this.state.selectedIdx].path;
      document.getElementById("aoi").classList.remove("blocked");
      (0, _checkFiles.doCheckFiles)(path).then(function (res) {
        var image_data;

        if (res.data.is_located) {
          image_data = res.data.image;
          var bbDict = image_data.bounding_box;
          var mask_bounds = [[bbDict.bottom, bbDict.left], [bbDict.top, bbDict.right]];

          _this.setState({
            maskArray: image_data.masks,
            mask_bounds: mask_bounds
          });
        } else {
          _this.prediction(path);
        }
      });
      return null;
    });

    _defineProperty(_assertThisInitialized(_this), "selectArea", function () {
      var top = document.getElementById("top").value;
      var bottom = document.getElementById("bottom").value;
      var left = document.getElementById("left").value;
      var right = document.getElementById("right").value;
      (0, _searchImages.doSearchImages)(top, bottom, left, right).then(function (res) {
        _this.setState({
          images: res.data.images
        });
      });
      return null;
    });

    var initialState = {
      "north": 0,
      "south": 0,
      "west": 0,
      "east": 0
    };
    _this.state = {
      sidebar_coords: initialState,
      clean: true,
      images: [],
      selectedIdx: -1,
      maskArray: [],
      mask_bounds: []
    };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_sidebar.default, {
        coords: this.state.sidebar_coords,
        cleanAll: this.cleanAll,
        selectImage: this.selectImage,
        selectArea: this.selectArea,
        images: this.state.images,
        hoverEnter: this.hoverEnter
      }), /*#__PURE__*/_react.default.createElement(_map.default, {
        squareCoords: this.squareCoords,
        cleanRectangle: this.state.clean,
        selectedIdx: this.state.selectedIdx,
        images: this.state.images,
        maskArray: this.state.maskArray,
        mask_bounds: this.state.mask_bounds
      }), /*#__PURE__*/_react.default.createElement("h6", {
        className: "footer"
      }, " "));
    }
  }]);

  return App;
}(_react.default.Component);

var _default = App;
exports.default = _default;
//# sourceMappingURL=App.js.map