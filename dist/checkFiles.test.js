"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _testUtils = require("react-dom/test-utils");

var _user = _interopRequireDefault(require("./user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var container = null;
beforeEach(function () {
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(function () {
  (0, _reactDom.unmountComponentAtNode)(container);
  container.remove();
  container = null;
});
it("renderiza datos de usuario", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var fakeUser;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          fakeUser = {
            name: "Joni Baez",
            age: "32",
            address: "123, Charming Avenue"
          };
          jest.spyOn(global, "fetch").mockImplementation(function () {
            return Promise.resolve({
              json: function json() {
                return Promise.resolve(fakeUser);
              }
            });
          });
          expect(container.querySelector("summary").textContent).toBe(fakeUser.name);
          expect(container.querySelector("strong").textContent).toBe(fakeUser.age);
          expect(container.textContent).toContain(fakeUser.address);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
//# sourceMappingURL=checkFiles.test.js.map