"use strict";

var _aoi = _interopRequireDefault(require("../src/components/sidebar_items/aoi"));

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
it('renders AOI text', function () {
  var bounds = {
    "north": 0,
    "south": 0,
    "west": 0,
    "east": 0
  };
  (0, _testUtils.act)(function () {
    (0, _reactDom.render)( /*#__PURE__*/_react.default.createElement(_aoi.default, {
      bounds: bounds
    }), container);
  });
  expect(container.querySelector("#top").value).toBe((Math.round(bounds.north * 10000) / 10000).toString());
  expect(container.querySelector("#bottom").value).toBe((Math.round(bounds.south * 10000) / 10000).toString());
  expect(container.querySelector("#left").value).toBe((Math.round(bounds.west * 10000) / 10000).toString());
  expect(container.querySelector("#right").value).toBe((Math.round(bounds.east * 10000) / 10000).toString());
  expect(container.querySelector(".aoi-title").textContent).toBe("Área de Interés (AOI)");
  expect(container.querySelector(".btn1").textContent).toBe("Seleccionar");
  expect(container.querySelector(".btn2").textContent).toBe("Borrar Todo");
});
//# sourceMappingURL=aoi.test.js.map