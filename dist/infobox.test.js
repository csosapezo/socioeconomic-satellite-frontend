"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _testUtils = require("react-dom/test-utils");

var _infobox = _interopRequireDefault(require("../src/components/sidebar_items/infobox"));

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
  (0, _testUtils.act)(function () {
    (0, _reactDom.render)( /*#__PURE__*/_react.default.createElement(_infobox.default, null), container);
  });
  expect(container.querySelector(".info-title").textContent).toBe("Instrucciones de uso");
});
//# sourceMappingURL=infobox.test.js.map