(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('inferno')) :
  typeof define === 'function' && define.amd ? define(['inferno'], factory) :
  (global.InfernoCalendar = factory(global.Inferno));
}(this, (function (inferno) { 'use strict';

  function LeftArrow(_ref) {
    var width = _ref.width,
        height = _ref.height;

    return inferno.createVNode(32, "svg", null, inferno.createVNode(1, "g", null, [inferno.createVNode(1, "path", null, null, 1, {
      "d": "M320 0 L0 160 L100 160 Z"
    }), inferno.createVNode(1, "path", null, null, 1, {
      "d": "M320 320 L0 160 L100 160 Z"
    })], 4, {
      "fill": "#9b9b9b",
      "stroke-width": "8",
      "stroke": "#9b9b9b"
    }), 2, {
      "version": "1.0",
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 320 320",
      "width": width,
      "height": height,
      "preserveAspectRatio": "xMidYMid meet"
    });
  }
  function RightArrow(_ref2) {
    var width = _ref2.width,
        height = _ref2.height;

    return inferno.createVNode(32, "svg", null, inferno.createVNode(1, "g", null, [inferno.createVNode(1, "path", null, null, 1, {
      "d": "M0 0 L320 160 L220 160 Z"
    }), inferno.createVNode(1, "path", null, null, 1, {
      "d": "M0 320 L320 160 L220 160 Z"
    })], 4, {
      "fill": "#9b9b9b",
      "stroke-width": "8",
      "stroke": "#9b9b9b"
    }), 2, {
      "version": "1.0",
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 320 320",
      "width": width,
      "height": height,
      "preserveAspectRatio": "xMidYMid meet"
    });
  }

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var monthHeader = {
    height: '15%',
    width: '100%'
  };
  var monthHeaderCol = {
    float: 'left',
    height: '100%'
  };
  var monthHeaderLeft = {
    width: '10%',
    backgroundColor: 'inherit',
    border: 'none'
  };
  var monthHeaderCenter = {
    width: '80%',
    textAlign: 'center'
  };
  var monthHeaderRight = {
    width: '10%',
    backgroundColor: 'inherit',
    border: 'none'
  };
  var monthHeaderTitle = {
    position: 'relative',
    height: '100%',
    margin: '0',
    top: '10px'
  };

  var MonthHeader = function (_Component) {
    _inherits(MonthHeader, _Component);

    function MonthHeader(props) {
      _classCallCheck(this, MonthHeader);

      var _this = _possibleConstructorReturn(this, (MonthHeader.__proto__ || Object.getPrototypeOf(MonthHeader)).call(this, props));

      _this.handleChange = _this.handleChange.bind(_this);
      return _this;
    }

    _createClass(MonthHeader, [{
      key: 'handleChange',
      value: function handleChange(e) {
        this.props.onMonthChange(e.currentTarget);
      }
    }, {
      key: 'render',
      value: function render() {
        return inferno.createVNode(1, 'div', null, [inferno.createVNode(1, 'button', null, inferno.createComponentVNode(2, LeftArrow, {
          'height': '100%',
          'width': '100%'
        }), 2, {
          'id': 'monthleft',
          'style': Object.assign(monthHeaderLeft, monthHeaderCol),
          'onClick': this.handleChange
        }), inferno.createVNode(1, 'div', null, inferno.createVNode(1, 'h1', null, this.props.title, 0, {
          'style': monthHeaderTitle
        }), 2, {
          'style': Object.assign(monthHeaderCenter, monthHeaderCol)
        }), inferno.createVNode(1, 'button', null, inferno.createComponentVNode(2, RightArrow, {
          'height': '100%',
          'width': '100%'
        }), 2, {
          'id': 'monthright',
          'style': Object.assign(monthHeaderRight, monthHeaderCol),
          'onClick': this.handleChange
        })], 4, {
          'style': monthHeader
        });
      }
    }]);

    return MonthHeader;
  }(inferno.Component);

  var MONTHS = [{ name: "January", abbrev: "Jan", days: 31 }, { name: "February", abbrev: "Feb", days: [28, 29] }, { name: "March", abbrev: "Mar", days: 31 }, { name: "April", abbrev: "Apr", days: 30 }, { name: "May", abbrev: "May", days: 31 }, { name: "June", abbrev: "Jun", days: 30 }, { name: "July", abbrev: "Jul", days: 31 }, { name: "August", abbrev: "Aug", days: 31 }, { name: "September", abbrev: "Sept", days: 30 }, { name: "October", abbrev: "Oct", days: 31 }, { name: "November", abbrev: "Nov", days: 30 }, { name: "December", abbrev: "Dec", days: 31 }];

  function moveDate(dateToMove, moveAmt) {
    var newDate = new Date(dateToMove.getFullYear(), dateToMove.getMonth(), dateToMove.getDate());
    newDate.setDate(dateToMove.getDate() + moveAmt);
    return newDate;
  }

  function moveMonth(dateToMove, moveAmt) {
    var newDate = new Date(dateToMove.getFullYear(), dateToMove.getMonth(), dateToMove.getDate());
    newDate.setMonth(dateToMove.getMonth() + moveAmt);
    return newDate;
  }

  var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var dayBox = {
    display: 'inline-block',
    width: '14.28%',
    height: '100%',
    borderLeft: '1px solid #cccccc',
    padding: '1px 5px',
    boxSizing: 'border-box'
  };
  var highlightNonActive = {
    backgroundColor: '#dedfe0'
  };

  var Day = function (_Component) {
    _inherits$1(Day, _Component);

    function Day(props) {
      _classCallCheck$1(this, Day);

      var _this = _possibleConstructorReturn$1(this, (Day.__proto__ || Object.getPrototypeOf(Day)).call(this, props));

      _this.state = {
        isBeginning: false,
        highlightActive: false
      };
      _this.handleEnter = _this.handleEnter.bind(_this);
      _this.handleLeave = _this.handleLeave.bind(_this);
      return _this;
    }

    _createClass$1(Day, [{
      key: 'renderEvents',
      value: function renderEvents() {
        var days = [];
        return days;
      }
    }, {
      key: 'handleEnter',
      value: function handleEnter(e) {
        this.setState({
          highlightActive: true
        });
      }
    }, {
      key: 'handleLeave',
      value: function handleLeave(e) {
        this.setState({
          highlightActive: false
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var dayStyles = this.props.highlight ? Object.assign(highlightNonActive, dayBox) : dayBox;
        var allDayStyles = this.state.highlightActive ? Object.assign({ backgroundColor: '#f9777c' }, dayStyles) : dayStyles;
        var font = {
          width: '10%',
          fontSize: '100%' };
        return inferno.createVNode(1, 'div', null, inferno.createVNode(1, 'span', null, this.props.day.getDate(), 0, {
          'style': font
        }), 2, {
          'onMouseEnter': this.handleEnter,
          'onMouseLeave': this.handleLeave,
          'style': allDayStyles
        });
      }
    }]);

    return Day;
  }(inferno.Component);

  var _createClass$2 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var DAYS = 7;
  var weekContainer = {
    width: '100%',
    borderTop: '1px solid #cccccc'
  };

  var Week = function (_Component) {
    _inherits$2(Week, _Component);

    function Week(props) {
      _classCallCheck$2(this, Week);

      var _this = _possibleConstructorReturn$2(this, (Week.__proto__ || Object.getPrototypeOf(Week)).call(this, props));

      _this.state = {
        isWeekView: false
      };
      return _this;
    }

    _createClass$2(Week, [{
      key: 'renderWeek',
      value: function renderWeek(startDay, selectedMonth) {
        var days = [];
        for (var i = 0; i < DAYS; i++) {
          var dayNum = moveDate(startDay, i);
          if (dayNum.getMonth() !== selectedMonth) {
            days.push(inferno.createComponentVNode(2, Day, {
              'day': dayNum,
              'highlight': true
            }));
          } else {
            days.push(inferno.createComponentVNode(2, Day, {
              'day': dayNum,
              'highlight': false
            }));
          }
        }
        return days;
      }
    }, {
      key: 'render',
      value: function render() {
        var month = this.props.selected.getMonth();
        var week = this.renderWeek(this.props.start, month);
        var rowHeight = 100 / this.props.number + '%';
        return inferno.createVNode(1, 'div', null, week, 0, {
          'style': Object.assign({ height: rowHeight }, weekContainer)
        });
      }
    }]);

    return Week;
  }(inferno.Component);

  var _createClass$3 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$3(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var WEEKS = 6;
  var monthContainer = {
    width: '100%',
    height: '100%',
    boxShadow: '0 2px 10px #cccccc'
  };
  var weeksContainer = {
    width: '100%',
    height: '85%'
  };

  var Month = function (_Component) {
    _inherits$3(Month, _Component);

    function Month(props) {
      _classCallCheck$3(this, Month);

      var _this = _possibleConstructorReturn$3(this, (Month.__proto__ || Object.getPrototypeOf(Month)).call(this, props));

      _this.state = {
        current: props.current,
        selected: props.selected
      };
      _this.handleMonthChange = _this.handleMonthChange.bind(_this);
      return _this;
    }

    _createClass$3(Month, [{
      key: 'handleMonthChange',
      value: function handleMonthChange(target) {
        var move = 0;
        if (target['id'] === 'monthleft') {
          move = -1;
        } else {
          move = 1;
        }
        this.setState({
          selected: moveMonth(this.state.selected, move)
        });
      }
    }, {
      key: 'getStartingDay',
      value: function getStartingDay(selectedDay, weekNumber) {
        var firstOfTheMonth = new Date(selectedDay.getFullYear(), selectedDay.getMonth());
        var weekFactor = weekNumber * 7;
        var moveAmt = 7 - firstOfTheMonth.getDay() - 7 + weekFactor;
        return moveDate(firstOfTheMonth, moveAmt);
      }
    }, {
      key: 'renderMonth',
      value: function renderMonth(selectedDay) {
        var weeks = [];
        for (var i = 0; i < WEEKS; i++) {
          weeks.push(inferno.createComponentVNode(2, Week, {
            'start': this.getStartingDay(selectedDay, i),
            'current': this.state.current,
            'selected': selectedDay,
            'number': WEEKS
          }));
        }
        return weeks;
      }
    }, {
      key: 'getMonthName',
      value: function getMonthName(monthIndex) {
        return MONTHS[monthIndex]['name'];
      }
    }, {
      key: 'render',
      value: function render() {
        var month = this.renderMonth(this.state.selected);
        var monthName = this.getMonthName(this.state.selected.getMonth());
        return inferno.createVNode(1, 'div', null, [inferno.createComponentVNode(2, MonthHeader, {
          'title': monthName,
          'onMonthChange': this.handleMonthChange
        }), inferno.createVNode(1, 'div', null, month, 0, {
          'style': weeksContainer
        })], 4, {
          'style': monthContainer
        });
      }
    }]);

    return Month;
  }(inferno.Component);

  var _createClass$4 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$4(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var YEARVIEW = "year";
  var MONTHVIEW = "month";
  var WEEKVIEW = "week";
  var DAYVIEW = "day";

  var Calendar = function (_Component) {
    _inherits$4(Calendar, _Component);

    function Calendar(props) {
      _classCallCheck$4(this, Calendar);

      var _this = _possibleConstructorReturn$4(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));

      _this.state = {
        currentDate: new Date(),
        selectedDate: new Date(),
        view: MONTHVIEW
      };
      return _this;
    }

    _createClass$4(Calendar, [{
      key: 'getView',
      value: function getView() {
        switch (this.state.view) {
          case YEARVIEW:
            return inferno.createVNode(1, 'div');
          case MONTHVIEW:
            return inferno.createComponentVNode(2, Month, {
              'current': this.state.currentDate,
              'selected': this.state.selectedDate
            });
          case WEEKVIEW:
            return inferno.createComponentVNode(2, Week, {
              'current': this.state.currentDate,
              'selected': this.state.selectedDate
            });
          case DAYVIEW:
            return inferno.createVNode(1, 'div');
          default:
            break;
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var calendarView = this.getView();
        return inferno.createVNode(1, 'section', null, calendarView, 0, {
          'style': this.props.calendarStyle
        });
      }
    }]);

    return Calendar;
  }(inferno.Component);

  return Calendar;

})));
