(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('inferno')) :
  typeof define === 'function' && define.amd ? define(['inferno'], factory) :
  (global.bundle = global.bundle || {}, global.bundle.js = factory(global.inferno));
}(this, (function (inferno) { 'use strict';

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  // if (year is not divisible by 4) then (it is a common year)
  // else if (year is not divisible by 100) then (it is a leap year)
  // else if (year is not divisible by 400) then (it is a common year)
  // else (it is a leap year)
  var WEEK = 7;

  var Calendar = function (_Component) {
    _inherits(Calendar, _Component);

    function Calendar(props) {
      _classCallCheck(this, Calendar);

      var _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));

      _this.state = {
        currentDate: new Date()
      };
      return _this;
    }

    _createClass(Calendar, [{
      key: 'renderMonth',
      value: function renderMonth() {
      }
    }, {
      key: 'renderWeek',
      value: function renderWeek() {
        var week = [];
        var divWidth = 100 / 7;
        var divHeight = 100 / 4;
        for (var i = 0; i < WEEK; i++) {
          week.push(inferno.createVNode(1, 'div', null, null, 1, {
            'style': { width: divWidth + '%', height: divHeight + '%', border: '1px solid black' }
          }));
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return inferno.createVNode(1, 'section', null, this.renderWeek(), 0, {
          'style': { width: this.props.width, height: this.props.height }
        });
      }
    }]);

    return Calendar;
  }(inferno.Component);

  return Calendar;

})));
