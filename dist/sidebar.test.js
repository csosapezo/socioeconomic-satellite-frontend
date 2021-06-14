"use strict";

var _sidebar = _interopRequireDefault(require("../src/components/sidebar"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _testUtils = require("react-dom/test-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var container = null;
beforeEach(function () {
  jest.spyOn(console, 'error');
  console.error.mockImplementation(function () {
    return null;
  });
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(function () {
  console.error.mockRestore();
  (0, _reactDom.unmountComponentAtNode)(container);
  container.remove();
  container = null;
});
it('renders sidebar items', function () {
  (0, _testUtils.act)(function () {
    var bounds = {
      "north": 0,
      "south": 0,
      "west": 0,
      "east": 0
    };
    (0, _reactDom.render)( /*#__PURE__*/_react.default.createElement(_sidebar.default, {
      coords: bounds,
      images: []
    }), container);
  });
  expect(document.querySelector("img").alt).toBe("Visualización de imágenes");
  expect(document.getElementById("aoi")).not.toBe(null);
  expect(document.getElementById("imagelist")).not.toBe(null);
  expect(document.getElementsByClassName("info")[0]).not.toBe(null);
});
//# sourceMappingURL=sidebar.test.js.map