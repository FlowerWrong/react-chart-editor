"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

require("react-day-picker/lib/style.css");

var _plotlyIcons = require("plotly-icons");

var _dates = require("plotly.js/src/lib/dates");

var _reactDayPicker = _interopRequireDefault(require("react-day-picker"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _TextInput = _interopRequireDefault(require("./TextInput"));

var _Dropdown = _interopRequireDefault(require("./Dropdown"));

var _constants = require("../../lib/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var testDate = '2000-01-01';
var testTime = '00:00';
var datePlaceholder = 'yyyy-mm-dd';
var timePlaceholder = 'hh:mm:ss.xxx';

var DateTimePicker = /*#__PURE__*/function (_Component) {
  _inherits(DateTimePicker, _Component);

  var _super = _createSuper(DateTimePicker);

  function DateTimePicker(props, context) {
    var _this;

    _classCallCheck(this, DateTimePicker);

    _this = _super.call(this, props, context);

    var _this$parsePlotlyJSDa = _this.parsePlotlyJSDateTime(props.value),
        time = _this$parsePlotlyJSDa.time,
        date = _this$parsePlotlyJSDa.date;

    var isValidTime = (0, _dates.isDateTime)(testDate + ' ' + time) || ['', timePlaceholder, _constants.MULTI_VALUED_PLACEHOLDER].includes(time);
    var isValidDate = (0, _dates.isDateTime)(date + ' ' + testTime) || ['', datePlaceholder, _constants.MULTI_VALUED_PLACEHOLDER].includes(date);
    _this.state = {
      calendarOpen: false,
      dateInputClassName: isValidDate ? 'datetimepicker-container-date-input' : 'datetimepicker-container-date-input +error',
      timeInputClassName: isValidTime ? 'datetimepicker-container-time-input' : 'datetimepicker-container-time-input +error',
      timeValue: time,
      dateValue: date,
      AMPM: _this.getAMPM(date, time, context.localize)
    };
    _this.toPlotlyJSDate = _this.toPlotlyJSDate.bind(_assertThisInitialized(_this));
    _this.onMonthChange = _this.onMonthChange.bind(_assertThisInitialized(_this));
    _this.onYearChange = _this.onYearChange.bind(_assertThisInitialized(_this));
    _this.onTimeChange = _this.onTimeChange.bind(_assertThisInitialized(_this));
    _this.onDateChange = _this.onDateChange.bind(_assertThisInitialized(_this));
    _this.onTimeUpdate = _this.onTimeUpdate.bind(_assertThisInitialized(_this));
    _this.onDateUpdate = _this.onDateUpdate.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DateTimePicker, [{
    key: "toPlotlyJSDate",
    value: function toPlotlyJSDate(value) {
      var ms = (0, _dates.dateTime2ms)(value);
      return (0, _dates.ms2DateTime)(ms);
    }
  }, {
    key: "getYearOptions",
    value: function getYearOptions(current) {
      // eslint-disable-next-line
      var base = 5;
      var yearAsNumber = parseInt(current, 10);
      var lastFive = new Array(base).fill(0).map(function (year, index) {
        var newOption = yearAsNumber - (base - index);
        return {
          label: newOption,
          value: newOption
        };
      });
      var nextFive = new Array(base).fill(0).map(function (year, index) {
        var newOption = yearAsNumber + (index + 1);
        return {
          label: newOption,
          value: newOption
        };
      });
      return lastFive.concat([{
        label: current,
        value: current
      }]).concat(nextFive);
    }
  }, {
    key: "getMonthOptions",
    value: function getMonthOptions() {
      var _ = this.context.localize;
      return [{
        label: _('January'),
        value: 0
      }, {
        label: _('February'),
        value: 1
      }, {
        label: _('March'),
        value: 2
      }, {
        label: _('April'),
        value: 3
      }, {
        label: _('May'),
        value: 4
      }, {
        label: _('June'),
        value: 5
      }, {
        label: _('July'),
        value: 6
      }, {
        label: _('August'),
        value: 7
      }, {
        label: _('September'),
        value: 8
      }, {
        label: _('October'),
        value: 9
      }, {
        label: _('November'),
        value: 10
      }, {
        label: _('December'),
        value: 11
      }];
    }
  }, {
    key: "onMonthChange",
    value: function onMonthChange(value) {
      var currentDateInJS = new Date(this.getAdjustedPlotlyJSDateTime(this.props.value));
      currentDateInJS.setMonth(value);
      var plotlyJSDate = this.toPlotlyJSDate(currentDateInJS);

      if ((0, _dates.isDateTime)(plotlyJSDate)) {
        this.props.onChange(plotlyJSDate);
      }

      var _this$parsePlotlyJSDa2 = this.parsePlotlyJSDateTime(plotlyJSDate),
          time = _this$parsePlotlyJSDa2.time,
          date = _this$parsePlotlyJSDa2.date;

      this.setState({
        timeValue: time,
        dateValue: date
      });
    }
  }, {
    key: "onYearChange",
    value: function onYearChange(value) {
      var currentDateInJS = new Date(this.getAdjustedPlotlyJSDateTime(this.props.value));
      currentDateInJS.setFullYear(value);
      var plotlyJSDate = this.toPlotlyJSDate(currentDateInJS);

      if ((0, _dates.isDateTime)(plotlyJSDate)) {
        this.props.onChange(plotlyJSDate);
      }

      var _this$parsePlotlyJSDa3 = this.parsePlotlyJSDateTime(plotlyJSDate),
          time = _this$parsePlotlyJSDa3.time,
          date = _this$parsePlotlyJSDa3.date;

      this.setState({
        timeValue: time,
        dateValue: date
      });
    }
  }, {
    key: "parsePlotlyJSDateTime",
    value: function parsePlotlyJSDateTime(value) {
      var parsed = value.split(' ');
      return {
        date: parsed[0],
        time: parsed[1] ? parsed[1] : ''
      };
    }
  }, {
    key: "getAMPM",
    value: function getAMPM(date, time, _) {
      var plotlyJSDateTime = date + ' ' + time;
      var isValidDateTime = (0, _dates.isDateTime)(plotlyJSDateTime);
      var JSDate = new Date(this.getAdjustedPlotlyJSDateTime(plotlyJSDateTime));
      var localeTime = JSDate.toLocaleTimeString('en-US').split(' ');
      var parsedTime = time.split(':').reduce(function (timeArray, timePart) {
        var parsed = timePart.split('.');
        return timeArray.concat(parsed);
      }, []);
      var isNoon = parsedTime[0] === '12' && parsedTime.slice(1).every(function (part) {
        return parseInt(part, 10) === 0;
      });
      return !isValidDateTime || time === '' || JSDate.toDateString() === 'Invalid Date' ? '' : localeTime[1] === 'PM' ? isNoon ? _('noon') : 'PM' : 'AM';
    }
  }, {
    key: "adjustedTime",
    value: function adjustedTime(time) {
      if (time.toString().length <= 2) {
        return time + ':00';
      }

      return time;
    }
  }, {
    key: "onTimeChange",
    value: function onTimeChange(value) {
      var _this$parsePlotlyJSDa4 = this.parsePlotlyJSDateTime(this.props.value),
          currentDate = _this$parsePlotlyJSDa4.date;

      var isValidTime = (0, _dates.isDateTime)(testDate + ' ' + value);
      this.setState({
        timeInputClassName: isValidTime || value === '' ? 'datetimepicker-container-time-input' : 'datetimepicker-container-time-input +error',
        timeValue: value,
        AMPM: this.getAMPM(currentDate, value, this.context.localize)
      });
    }
  }, {
    key: "onDateChange",
    value: function onDateChange(value) {
      var isValidDate = (0, _dates.isDateTime)(value + ' ' + testTime);
      this.setState({
        dateInputClassName: isValidDate || value === '' ? 'datetimepicker-container-date-input' : 'datetimepicker-container-date-input +error',
        dateValue: value
      });
    }
  }, {
    key: "onTimeUpdate",
    value: function onTimeUpdate(value) {
      var _this$parsePlotlyJSDa5 = this.parsePlotlyJSDateTime(this.props.value),
          currentTime = _this$parsePlotlyJSDa5.time,
          currentDate = _this$parsePlotlyJSDa5.date;

      var isValidTime = (0, _dates.isDateTime)(testDate + ' ' + value);

      if (value === '') {
        this.setState({
          timeInputClassName: 'datetimepicker-container-time-input',
          timeValue: currentTime,
          AMPM: this.getAMPM(currentDate, currentTime, this.context.localize)
        });
        return;
      }

      if (isValidTime) {
        this.props.onChange(currentDate + ' ' + value);
      }
    }
  }, {
    key: "onDateUpdate",
    value: function onDateUpdate(value) {
      var _this$parsePlotlyJSDa6 = this.parsePlotlyJSDateTime(this.props.value),
          currentDate = _this$parsePlotlyJSDa6.date,
          currentTime = _this$parsePlotlyJSDa6.time;

      var isValidDate = (0, _dates.isDateTime)(value + ' ' + testTime);

      if (isValidDate) {
        this.props.onChange(value + ' ' + currentTime);
        return;
      }

      if (value === '') {
        this.setState({
          dateValue: currentDate,
          dateInputClassName: 'datetimepicker-container-date-input'
        });
        return;
      }
    }
  }, {
    key: "getAdjustedPlotlyJSDateTime",
    value: function getAdjustedPlotlyJSDateTime(dateTimeString) {
      var _this$parsePlotlyJSDa7 = this.parsePlotlyJSDateTime(dateTimeString),
          date = _this$parsePlotlyJSDa7.date,
          time = _this$parsePlotlyJSDa7.time;

      return date + ' ' + this.adjustedTime(time);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var JSDate = new Date(this.getAdjustedPlotlyJSDateTime(this.state.dateValue + ' ' + testTime));
      var isValidJSDate = JSDate.toDateString() !== 'Invalid Date';
      var currentYear = isValidJSDate ? JSDate.getFullYear() : new Date().getFullYear();
      var currentMonth = isValidJSDate ? JSDate.getMonth() : new Date().getMonth();
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "datetimepicker-container",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TextInput.default, {
          value: this.state.dateValue,
          editableClassName: this.state.dateInputClassName,
          onChange: this.onDateChange,
          onUpdate: this.onDateUpdate,
          placeholder: datePlaceholder
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "datetimepicker-container-icons",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_plotlyIcons.CalendarMultiselectIcon, {
            onClick: function onClick() {
              return _this2.setState({
                calendarOpen: !_this2.state.calendarOpen
              });
            },
            className: this.state.calendarOpen ? 'datetimepicker-date-icon--selected' : 'datetimepicker-date-icon'
          })
        }), this.state.calendarOpen ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "datetimepicker-container__content",
          children: this.state.calendarOpen ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "datetimepicker-datepicker-container",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "datetimepicker-datepicker-navbar",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown.default, {
                options: this.getMonthOptions(),
                value: currentMonth,
                className: "datimepicker-monthpicker",
                clearable: false,
                onChange: this.onMonthChange
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown.default, {
                options: this.getYearOptions(currentYear),
                value: currentYear,
                className: "datimepicker-yearpicker",
                clearable: false,
                onChange: this.onYearChange
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactDayPicker.default, {
              className: "datepicker-container-rce",
              modifiers: {
                highlighted: isValidJSDate ? JSDate : ''
              },
              month: isValidJSDate ? JSDate : new Date(),
              onDayClick: function onDayClick(value) {
                var plotlyDate = _this2.toPlotlyJSDate(value).split(' ')[0];

                _this2.onDateChange(plotlyDate);

                _this2.onDateUpdate(plotlyDate);
              }
            })]
          }) : null
        }) : null, /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "datetimepicker-container-time",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TextInput.default, {
            value: this.state.timeValue,
            onChange: this.onTimeChange,
            onUpdate: this.onTimeUpdate,
            placeholder: timePlaceholder,
            editableClassName: this.state.timeInputClassName
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "datetimepicker-date-units",
            children: this.state.AMPM
          })]
        })]
      });
    }
  }]);

  return DateTimePicker;
}(_react.Component);

exports.default = DateTimePicker;
DateTimePicker.propTypes = {
  value: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired
};
DateTimePicker.contextTypes = {
  localize: _propTypes.default.func
};
//# sourceMappingURL=DateTimePicker.js.map