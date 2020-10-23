"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _components = require("../components");

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

var StyleAxesPanel = /*#__PURE__*/function (_Component) {
  _inherits(StyleAxesPanel, _Component);

  var _super = _createSuper(StyleAxesPanel);

  function StyleAxesPanel() {
    _classCallCheck(this, StyleAxesPanel);

    return _super.apply(this, arguments);
  }

  _createClass(StyleAxesPanel, [{
    key: "render",
    value: function render() {
      var _ = this.context.localize;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.LayoutPanel, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.AxesFold, {
          name: _('Titles'),
          axisFilter: function axisFilter(axis) {
            return !(axis._name.includes('angular') || axis._subplot.includes('geo'));
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TextEditor, {
            attr: "title.text"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.FontSelector, {
            label: _('Typeface'),
            attr: "title.font.family"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
            label: _('Font Size'),
            attr: "title.font.size",
            units: "px"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
            label: _('Font Color'),
            attr: "title.font.color"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.AxesFold, {
          name: _('Range'),
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
            name: _('Range'),
            attr: "autorange",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
              attr: "type",
              label: _('Type'),
              clearable: false,
              options: [{
                label: _('Linear'),
                value: 'linear'
              }, {
                label: _('Log'),
                value: 'log'
              }, {
                label: _('Date'),
                value: 'date'
              }, {
                label: _('Categorical'),
                value: 'category'
              }, {
                label: _('Multicategorical'),
                value: 'multicategory'
              }]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
              attr: "autorange",
              label: _('Range'),
              options: [{
                label: _('Auto'),
                value: true
              }, {
                label: _('Custom'),
                value: false
              }]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.AxesRange, {
              label: _('Min'),
              attr: "range[0]"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.AxesRange, {
              label: _('Max'),
              attr: "range[1]"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
              label: _('Min'),
              attr: "min"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.PlotlySection, {
            name: _('Zoom Interactivity'),
            attr: "fixedrange",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
              attr: "fixedrange",
              options: [{
                label: _('Enable'),
                value: false
              }, {
                label: _('Disable'),
                value: true
              }]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
            label: _('Direction'),
            attr: "direction",
            options: [{
              label: _('Clockwise'),
              value: 'clockwise'
            }, {
              label: _('Counter Clockwise'),
              value: 'counterclockwise'
            }],
            clearable: false
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.AxesFold, {
          name: _('Lines'),
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.PlotlySection, {
            name: _('Axis Line'),
            attr: "showline",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.VisibilitySelect, {
              attr: "showline",
              options: [{
                label: _('Show'),
                value: true
              }, {
                label: _('Hide'),
                value: false
              }],
              showOn: true,
              defaultOpt: true,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
                label: _('Thickness'),
                attr: "linewidth",
                units: "px"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
                label: _('Color'),
                attr: "linecolor"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.AxisSide, {
                label: _('Position'),
                attr: "side"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
                label: _('Mirror Axis'),
                attr: "mirror",
                options: [{
                  label: _('On'),
                  value: 'ticks'
                }, {
                  label: _('Off'),
                  value: false
                }]
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.PlotlySection, {
            name: _('Grid Lines'),
            attr: "showgrid",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.VisibilitySelect, {
              attr: "showgrid",
              options: [{
                label: _('Show'),
                value: true
              }, {
                label: _('Hide'),
                value: false
              }],
              showOn: true,
              defaultOpt: true,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
                label: _('Thickness'),
                attr: "gridwidth",
                units: "px"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
                label: _('Color'),
                attr: "gridcolor"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
                label: _('Position On'),
                attr: "tickson",
                options: [{
                  label: _('Labels'),
                  value: 'labels'
                }, {
                  label: _('Boundaries'),
                  value: 'boundaries'
                }]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
                label: _('Grid Spacing'),
                attr: "tickmode",
                options: [{
                  label: _('Auto'),
                  value: 'auto'
                }, {
                  label: _('Custom'),
                  value: 'linear'
                }]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DTicks, {
                label: _('Step Offset'),
                attr: "tick0"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DTicksInterval, {
                label: _('Step Size'),
                attr: "dtick"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NTicks, {
                label: _('Max Number of Lines'),
                attr: "nticks"
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
            name: _('Zero Line'),
            attr: "zeroline",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
              attr: "zeroline",
              options: [{
                label: _('Show'),
                value: true
              }, {
                label: _('Hide'),
                value: false
              }]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
              label: _('Thickness'),
              attr: "zerolinewidth",
              units: "px"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
              label: _('Color'),
              attr: "zerolinecolor"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
            name: _('Axis Background'),
            attr: "showbackground",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
              attr: "showbackground",
              options: [{
                label: _('Show'),
                value: true
              }, {
                label: _('Hide'),
                value: false
              }]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
              label: _('Color'),
              attr: "backgroundcolor"
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.AxesFold, {
          name: _('Tick Labels'),
          axisFilter: function axisFilter(axis) {
            return !axis._subplot.includes('geo');
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.PlotlySection, {
            name: _('Tick Labels'),
            attr: "showticklabels",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.VisibilitySelect, {
              attr: "showticklabels",
              options: [{
                label: _('Show'),
                value: true
              }, {
                label: _('Hide'),
                value: false
              }],
              showOn: true,
              defaultOpt: true,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.AxisSide, {
                label: _('Position'),
                attr: "side"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
                label: _('Auto margins'),
                attr: "automargin",
                options: [{
                  label: _('True'),
                  value: true
                }, {
                  label: _('False'),
                  value: false
                }]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
                label: _('Position on'),
                attr: "tickson",
                options: [{
                  label: _('Labels'),
                  value: 'labels'
                }, {
                  label: _('Boundaries'),
                  value: 'boundaries'
                }]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.FontSelector, {
                label: _('Typeface'),
                attr: "tickfont.family"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
                label: _('Font Size'),
                attr: "tickfont.size",
                units: "px"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
                label: _('Font Color'),
                attr: "tickfont.color"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
                label: _('Angle'),
                attr: "tickangle",
                clearable: false,
                options: [{
                  label: _('Auto'),
                  value: 'auto'
                }, {
                  label: _('45'),
                  value: 45
                }, {
                  label: _('90'),
                  value: 90
                }, {
                  label: _('135'),
                  value: 135
                }, {
                  label: _('180'),
                  value: 180
                }]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TickFormat, {
                label: _('Label Format'),
                attr: "tickformat",
                dafaultOpt: "",
                clearable: false
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
                label: _('Separate Thousands'),
                attr: "separatethousands",
                options: [{
                  label: _('True'),
                  value: true
                }, {
                  label: _('False'),
                  value: false
                }]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
                label: _('Exponents'),
                attr: "exponentformat",
                clearable: false,
                options: [{
                  label: _('None'),
                  value: 'none'
                }, {
                  label: _('e+6'),
                  value: 'e'
                }, {
                  label: _('E+6'),
                  value: 'E'
                }, {
                  label: _('x10^6'),
                  value: 'power'
                }, {
                  label: _('k/M/G'),
                  value: 'SI'
                }, {
                  label: _('k/M/B'),
                  value: 'B'
                }]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
                label: _('Show Exponents'),
                attr: "showexponent",
                clearable: false,
                options: [{
                  label: _('All'),
                  value: 'all'
                }, {
                  label: _('First'),
                  value: 'first'
                }, {
                  label: _('Last'),
                  value: 'last'
                }, {
                  label: _('None'),
                  value: 'none'
                }]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DropdownCustom, {
                label: _('Prefix'),
                attr: "tickprefix",
                options: [{
                  label: _('None'),
                  value: ''
                }, {
                  label: _('x'),
                  value: 'x'
                }, {
                  label: _('$'),
                  value: '$'
                }, {
                  label: _('#'),
                  value: '#'
                }, {
                  label: _('@'),
                  value: '@'
                }, {
                  label: _('Custom'),
                  value: 'custom'
                }],
                customOpt: "custom",
                dafaultOpt: "",
                clearable: false
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
                label: _('Show Prefix'),
                attr: "showtickprefix",
                options: [{
                  label: _('Every label'),
                  value: 'all'
                }, {
                  label: _('First label'),
                  value: 'first'
                }, {
                  label: _('Last label'),
                  value: 'last'
                }, {
                  label: _('None'),
                  value: 'none'
                }]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DropdownCustom, {
                label: _('Suffix'),
                attr: "ticksuffix",
                options: [{
                  label: _('None'),
                  value: ''
                }, {
                  label: _('C'),
                  value: 'C'
                }, {
                  label: _('%'),
                  value: '%'
                }, {
                  label: _('^'),
                  value: '^'
                }, {
                  label: _('Custom'),
                  value: 'custom'
                }],
                customOpt: "custom",
                dafaultOpt: "",
                clearable: false
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
                label: _('Show Suffix'),
                attr: "showticksuffix",
                options: [{
                  label: _('Every label'),
                  value: 'all'
                }, {
                  label: _('First label'),
                  value: 'first'
                }, {
                  label: _('Last label'),
                  value: 'last'
                }, {
                  label: _('None'),
                  value: 'none'
                }]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
                label: _('Tick Spacing'),
                attr: "tickmode",
                options: [{
                  label: _('Auto'),
                  value: 'auto'
                }, {
                  label: _('Custom'),
                  value: 'linear'
                }]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DTicks, {
                label: _('Step Offset'),
                attr: "tick0"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DTicksInterval, {
                label: _('Step Size'),
                attr: "dtick"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NTicks, {
                label: _('Max Number of Labels'),
                attr: "nticks"
              })]
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.AxesFold, {
          name: _('Tick Markers'),
          axisFilter: function axisFilter(axis) {
            return !axis._subplot.includes('geo');
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.PlotlySection, {
            name: _('Tick Markers'),
            attr: "ticks",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.VisibilitySelect, {
              attr: "ticks",
              options: [{
                label: _('Inside'),
                value: 'inside'
              }, {
                label: _('Outside'),
                value: 'outside'
              }, {
                label: _('Hide'),
                value: ''
              }],
              showOn: ['inside', 'outside'],
              defaultOpt: 'Outside',
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.AxisSide, {
                label: _('Position'),
                attr: "side"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
                label: _('Position on'),
                attr: "tickson",
                options: [{
                  label: _('Labels'),
                  value: 'labels'
                }, {
                  label: _('Boundaries'),
                  value: 'boundaries'
                }]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
                label: _('Length'),
                attr: "ticklen",
                units: "px"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
                label: _('Width'),
                attr: "tickwidth",
                units: "px"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
                label: _('Color'),
                attr: "tickcolor"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
                label: _('Tick Spacing'),
                attr: "tickmode",
                options: [{
                  label: _('Auto'),
                  value: 'auto'
                }, {
                  label: _('Custom'),
                  value: 'linear'
                }]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DTicks, {
                label: _('Step Offset'),
                attr: "tick0"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.DTicksInterval, {
                label: _('Step Size'),
                attr: "dtick"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NTicks, {
                label: _('Max Number of Markers'),
                attr: "nticks"
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.PlotlySection, {
            name: _('Multicategory Dividers'),
            attr: "showdividers",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.VisibilitySelect, {
              attr: "showdividers",
              options: [{
                label: _('Show'),
                value: true
              }, {
                label: _('Hide'),
                value: false
              }],
              showOn: true,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
                label: _('Width'),
                attr: "dividerwidth",
                units: "px"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
                label: _('Color'),
                attr: "dividercolor"
              })]
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.AxesFold, {
          name: _('Range Slider'),
          axisFilter: function axisFilter(axis) {
            return axis._subplot.includes('xaxis');
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.RangesliderVisible, {
            attr: "rangeslider.visible",
            options: [{
              label: _('Show'),
              value: true
            }, {
              label: _('Hide'),
              value: false
            }]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.NumericFraction, {
            label: _('Height'),
            attr: "rangeslider.thickness"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
            label: _('Background Color'),
            attr: "rangeslider.bgcolor"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
            label: _('Border Width'),
            attr: "rangeslider.borderwidth",
            units: "px"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
            label: _('Border Color'),
            attr: "rangeslider.bordercolor"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.AxesFold, {
          name: _('Timescale Buttons'),
          axisFilter: function axisFilter(axis) {
            return axis._subplot.includes('xaxis') && axis.type === 'date';
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
            attr: "rangeselector.visible",
            options: [{
              label: _('Show'),
              value: true
            }, {
              label: _('Hide'),
              value: false
            }]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.RangeSelectorAccordion, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TextEditor, {
              attr: "label",
              label: _('Label'),
              show: true
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
              label: _('Count'),
              attr: "count"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
              label: _('Step'),
              attr: "step",
              clearable: false,
              options: [{
                label: _('Year'),
                value: 'year'
              }, {
                label: _('Month'),
                value: 'month'
              }, {
                label: _('Day'),
                value: 'day'
              }, {
                label: _('Hour'),
                value: 'hour'
              }, {
                label: _('Minute'),
                value: 'minute'
              }, {
                label: _('Second'),
                value: 'second'
              }, {
                label: _('All'),
                value: 'all'
              }]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
              label: _('Stepmode'),
              attr: "stepmode",
              clearable: false,
              options: [{
                label: _('To Date'),
                value: 'todate'
              }, {
                label: _('Backward'),
                value: 'backward'
              }]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
            name: _('Text'),
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.FontSelector, {
              label: _('Typeface'),
              attr: "rangeselector.font.family"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
              label: _('Font Size'),
              attr: "rangeselector.font.size",
              units: "px"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
              label: _('Font Color'),
              attr: "rangeselector.font.color"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
            name: _('Style'),
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
              label: _('Background Color'),
              attr: "rangeselector.bgcolor"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
              label: _('Active Color'),
              attr: "rangeselector.activecolor"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
              label: _('Border Width'),
              attr: "rangeselector.borderwidth",
              units: "px"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
              label: _('Border Color'),
              attr: "rangeselector.bordercolor"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
            name: _('Horizontal Positioning'),
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
              label: _('Anchor Point'),
              clearable: false,
              attr: "rangeselector.xanchor",
              options: [{
                label: _('Auto'),
                value: 'auto'
              }, {
                label: _('Left'),
                value: 'left'
              }, {
                label: _('Center'),
                value: 'center'
              }, {
                label: _('Right'),
                value: 'right'
              }]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
              label: _('Position'),
              step: 0.02,
              attr: "rangeselector.x"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.PlotlySection, {
            name: _('Vertical Positioning'),
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Dropdown, {
              label: _('Anchor Point'),
              clearable: false,
              attr: "rangeselector.yanchor",
              options: [{
                label: _('Auto'),
                value: 'auto'
              }, {
                label: _('Top'),
                value: 'top'
              }, {
                label: _('Middle'),
                value: 'middle'
              }, {
                label: _('Bottom'),
                value: 'bottom'
              }]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
              label: _('Position'),
              step: 0.02,
              attr: "rangeselector.y"
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.AxesFold, {
          name: _('Spike Lines'),
          axisFilter: function axisFilter(axis) {
            return !(axis._subplot.includes('ternary') || axis._subplot.includes('polar') || axis._subplot.includes('geo'));
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
            attr: "showspikes",
            options: [{
              label: _('Show'),
              value: true
            }, {
              label: _('Hide'),
              value: false
            }]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Radio, {
            attr: "spikesides",
            label: _('Show Sides'),
            options: [{
              label: _('Show'),
              value: true
            }, {
              label: _('Hide'),
              value: false
            }]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Numeric, {
            label: _('Thickness'),
            attr: "spikethickness",
            units: "px"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.ColorPicker, {
            label: _('Color'),
            attr: "spikecolor"
          })]
        })]
      });
    }
  }]);

  return StyleAxesPanel;
}(_react.Component);

StyleAxesPanel.contextTypes = {
  fullLayout: _propTypes.default.object,
  localize: _propTypes.default.func
};
var _default = StyleAxesPanel;
exports.default = _default;
//# sourceMappingURL=StyleAxesPanel.js.map