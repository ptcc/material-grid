"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import './material-grid.css';

var GenerateGridClassNames = function GenerateGridClassNames(props) {
  var classes = "mdl-grid";
  console.log(props);
  return classes;
};

var Grid = function Grid(props) {
  var classNames = GenerateGridClassNames(props);
  return _react2.default.createElement("div", { className: classNames });
};

exports.default = Grid;