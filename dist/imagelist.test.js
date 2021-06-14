"use strict";

var _imagelist = _interopRequireDefault(require("../src/components/sidebar_items/imagelist"));

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
it('renders Imagelist', function () {
  var images = [{
    "name": "foo"
  }, {
    "name": "bar"
  }];
  (0, _testUtils.act)(function () {
    (0, _reactDom.render)( /*#__PURE__*/_react.default.createElement(_imagelist.default, {
      images: images
    }), container);
  });
  expect(document.getElementById("0").textContent).toBe("foo");
  expect(document.getElementById("1").textContent).toBe("bar");
  expect(container.querySelector(".list-title").textContent).toBe("Selección de Imágenes");
  expect(container.querySelector(".header").textContent).toBe("Nombre de archivo");
  expect(container.querySelector(".btn1").textContent).toBe("Seleccionar");
  expect(container.querySelector(".btn2").textContent).toBe("Regresar");
});
//# sourceMappingURL=imagelist.test.js.map