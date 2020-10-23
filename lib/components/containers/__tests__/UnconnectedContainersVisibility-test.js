"use strict";

var _jsxRuntime = require("react/jsx-runtime");

var _fields = require("../../fields");

var _ = require("..");

var _testUtils = require("../../../lib/test-utils");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Stylistically Panel, Fold, Section are the same as PlotlyPanel, PlotlyFold, PlotlySection
// but unlike them, they have no special visibility rules, they always display themselves
// and their children.
describe('Basic Panel rules', function () {
  describe('not connected, provides no context, cannot use with Fields', function () {
    var wrapper = (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, _testUtils.fixtures.scatter()), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_.Panel, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          id: "thediv",
          children: " ok "
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_fields.Numeric, {
          attr: "title"
        })]
      })
    })));
    it('HIDES Field', function () {
      return expect(wrapper.find('input').length).toEqual(0);
    });
    it('SHOWS div which does not need context', function () {
      return expect(wrapper.find('input').length).toEqual(0);
    });
  });
  describe("displays all it's children", function () {
    var wrapper = (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, _testUtils.fixtures.scatter()), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_.Panel, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_.Section, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            id: "thediv",
            children: " ok "
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_fields.Numeric, {
            attr: "title"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Fold, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            id: "theseconddiv"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Fold, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fields.Info, {})
        })]
      })
    })));
    it('SHOWS Section, Fold, #thediv, #theseconddiv, Info', function () {
      expect(wrapper.find('div.section').length).toEqual(1);
      expect(wrapper.find('div.fold').length).toEqual(2);
      expect(wrapper.find('#thediv').length).toEqual(1);
      expect(wrapper.find('#theseconddiv').length).toEqual(1);
      expect(wrapper.find('.js-test-info').length).toEqual(1);
    });
    it('HIDES Field because it needs context', function () {
      return expect(wrapper.find('input').length).toEqual(0);
    });
    it('PANEL shows collapse functionality, FOLD is foldable', function () {
      expect(wrapper.find('.panel__header__collapse').length).toEqual(1);
      expect(wrapper.find(_.Fold).first().props().folded).toBe(false);
      expect(_typeof(wrapper.find(_.Fold).first().props().toggleFold)).toBe('function');
    });
  });
});
describe('Basic Section rules', function () {
  describe('always shows itself and its children', function () {
    describe('Panel > Section > Field-with-visible-attr', function () {
      var wrapper = (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, _testUtils.fixtures.scatter()), {}, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Panel, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Section, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fields.Numeric, {
              attr: "title"
            })
          })
        })
      })));
      it('SHOWS Section because it always shows itself', function () {
        return expect(wrapper.find('div.section').length).toEqual(1);
      });
      it("HIDES Field because there's no context for it", function () {
        return expect(wrapper.find('input').length).toEqual(0);
      });
    });
    describe('PlotlyPanel > Section > Field-with-visible-attr', function () {
      var wrapper = (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, _testUtils.fixtures.scatter()), {}, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.LayoutPanel, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Section, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fields.Numeric, {
              attr: "title"
            })
          })
        })
      })));
      it('SHOWS Section because it always shows itself', function () {
        return expect(wrapper.find('div.section').length).toEqual(1);
      });
      it('SHOWS Field', function () {
        return expect(wrapper.find('input').length).toEqual(1);
      });
    });
    describe('PlotlyPanel > Section > Field-with-invisible-attr', function () {
      var wrapper = (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, _testUtils.fixtures.scatter()), {}, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.LayoutPanel, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Section, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fields.Numeric, {
              attr: "not_an_attr"
            })
          })
        })
      })));
      it('SHOWS Section because it always shows itself', function () {
        return expect(wrapper.find('div.section').length).toEqual(1);
      });
      it('HIDES Field', function () {
        return expect(wrapper.find('input').length).toEqual(0);
      });
    });
    describe('Panel > Section > div', function () {
      var wrapper = (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, _testUtils.fixtures.scatter()), {}, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Panel, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Section, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              id: "thediv"
            })
          })
        })
      })));
      it('SHOWS PlotlySection', function () {
        return expect(wrapper.find('div.section').length).toEqual(1);
      });
      it('SHOWS div', function () {
        return expect(wrapper.find('#thediv').length).toEqual(1);
      });
    });
  });
});
describe('Basic Fold rules', function () {
  describe('always shows itself and its children', function () {
    describe('Panel > Fold > Field-with-visible-attr', function () {
      var wrapper = (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, _testUtils.fixtures.scatter()), {}, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Panel, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Fold, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fields.Numeric, {
              attr: "title"
            })
          })
        })
      })));
      it('SHOWS Fold', function () {
        return expect(wrapper.find('div.fold').length).toEqual(1);
      });
      it('HIDES Field because it has no context', function () {
        return expect(wrapper.find('input').length).toEqual(0);
      });
    });
    describe('LayoutPanel > Fold > Field-with-visible-attr', function () {
      var wrapper = (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, _testUtils.fixtures.scatter()), {}, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.LayoutPanel, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Fold, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fields.Numeric, {
              attr: "title"
            })
          })
        })
      })));
      it('SHOWS Fold', function () {
        return expect(wrapper.find('div.fold').length).toEqual(1);
      });
      it('SHOWS Field', function () {
        return expect(wrapper.find('input').length).toEqual(1);
      });
    });
    describe('LayoutPanel > Fold > Field-with-invisible-attr', function () {
      var wrapper = (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, _testUtils.fixtures.scatter()), {}, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.LayoutPanel, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Fold, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fields.Numeric, {
              attr: "not_an_attr"
            })
          })
        })
      })));
      it('SHOWS Fold', function () {
        return expect(wrapper.find('div.fold').length).toEqual(1);
      });
      it('HIDES Field', function () {
        return expect(wrapper.find('input').length).toEqual(0);
      });
    });
    describe('Panel > Fold > div', function () {
      var wrapper = (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, _testUtils.fixtures.scatter()), {}, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Panel, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Fold, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              id: "thediv",
              children: " ok "
            })
          })
        })
      })));
      it('SHOWS Fold', function () {
        return expect(wrapper.find('div.fold').length).toEqual(1);
      });
      it('SHOWS div', function () {
        return expect(wrapper.find('#thediv').length).toEqual(1);
      });
    });
    describe('no_visibility_forcing, plotly_editor_trait have no effect', function () {
      describe('PlotlySection', function () {
        describe('div', function () {
          var wrapper = (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, _testUtils.fixtures.scatter()), {}, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Panel, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Fold, {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.PlotlySection, {
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    id: "thediv",
                    children: " ok "
                  })
                })
              })
            })
          })));
          it('SHOWS Fold', function () {
            return expect(wrapper.find('div.fold').length).toEqual(1);
          });
          it('SHOWS PlotlySection', function () {
            return expect(wrapper.find('div.section').length).toEqual(1);
          });
          it('SHOWS div', function () {
            return expect(wrapper.find('#thediv').length).toEqual(1);
          });
        });
        describe('Field-with-visible-attr', function () {
          var wrapper = (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, _testUtils.fixtures.scatter()), {}, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.LayoutPanel, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Fold, {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.PlotlySection, {
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fields.Numeric, {
                    attr: "title"
                  })
                })
              })
            })
          })));
          it('SHOWS Fold', function () {
            return expect(wrapper.find('div.fold').length).toEqual(1);
          });
          it('SHOWS PlotlySection', function () {
            return expect(wrapper.find('div.section').length).toEqual(1);
          });
          it('SHOWS Field', function () {
            return expect(wrapper.find('input').length).toEqual(1);
          });
        });
        describe('Field-with-invisible-attr', function () {
          var wrapper = (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, _testUtils.fixtures.scatter()), {}, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.LayoutPanel, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Fold, {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.PlotlySection, {
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fields.Numeric, {
                    attr: "not_an_attr"
                  })
                })
              })
            })
          })));
          it('SHOWS Fold', function () {
            return expect(wrapper.find('div.fold').length).toEqual(1);
          });
          it('HIDES PlotlySection because Plotly Section visibility rules apply', function () {
            return expect(wrapper.find('div.section').length).toEqual(0);
          });
          it('HIDES Field', function () {
            return expect(wrapper.find('input').length).toEqual(0);
          });
        });
      });
    });
    describe('PlotlyPanel', function () {
      describe('Field-with-visible-attr', function () {
        var wrapper = (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, _testUtils.fixtures.scatter()), {}, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.LayoutPanel, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Fold, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.LayoutPanel, {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fields.Numeric, {
                  attr: "title"
                })
              })
            })
          })
        })));
        it('SHOWS Fold', function () {
          return expect(wrapper.find('div.fold').length).toEqual(1);
        });
        it('SHOWS PlotlyPanel', function () {
          return expect(wrapper.find('div.panel').length).toEqual(2);
        });
        it('SHOWS Field', function () {
          return expect(wrapper.find('input').length).toEqual(1);
        });
      });
    });
    describe('Info', function () {
      describe('Field-with-visible-attr', function () {
        var wrapper = (0, _testUtils.mount)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_testUtils.TestEditor, _objectSpread(_objectSpread({}, _testUtils.fixtures.scatter()), {}, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.LayoutPanel, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Fold, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_fields.Info, {
                children: "ok"
              })
            })
          })
        })));
        it('SHOWS Fold', function () {
          return expect(wrapper.find('div.fold').length).toEqual(1);
        });
        it('SHOWS Info', function () {
          return expect(wrapper.find('.js-test-info').length).toEqual(1);
        });
      });
    });
  });
});
//# sourceMappingURL=UnconnectedContainersVisibility-test.js.map