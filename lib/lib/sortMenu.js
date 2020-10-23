"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sortMenu;

function getUniqueValues(value, index, self) {
  return self.indexOf(value) === index;
}

function sortAlphabetically(a, b) {
  var sortByGroup = a.props.group === b.props.group ? 0 : a.props.group < b.props.group ? -1 : 1;
  var sortByName = a.props.name === b.props.name ? 0 : a.props.name < b.props.name ? -1 : 1;
  return sortByGroup || sortByName;
}

function sortMenu(children, order) {
  // Break out early if no order is provided
  if (!order) {
    return children;
  } // PART 1: only sorting panels (i.e. child with a group and name prop)
  // and not other elements (like Buttons, or Logo)


  var panelsStartIndex = null;
  var panelsEndIndex = null;

  for (var i = 0; i < children.length; i++) {
    if (children[i].props.group && children[i].props.name && !panelsStartIndex) {
      panelsStartIndex = i;
      break;
    }
  }

  for (var _i = panelsStartIndex; _i < children.length; _i++) {
    if (!children[_i].props.group && !children[_i].props.name && !panelsEndIndex) {
      panelsEndIndex = _i - 1;
      break;
    } else if (_i === children.length - 1) {
      panelsEndIndex = _i;
    }
  }

  var prePanelsChildren = panelsStartIndex === 0 ? [] : children.slice(0, panelsStartIndex);
  var panels = panelsStartIndex !== panelsEndIndex ? children.slice(panelsStartIndex, panelsEndIndex + 1) : [];
  var postPanelsChildren = panelsEndIndex === children.length ? [] : children.slice(panelsEndIndex + 1); // PART 2: validate order prop, if a desired panel specified in order, matches no actual panel rendered
  // in the panels array, it is excluded from ordering considerations
  // eslint-disable-next-line

  order = order.filter(function (desiredPanel) {
    return panels.some(function (actualPanel) {
      return actualPanel.props.name === desiredPanel.name && actualPanel.props.group === desiredPanel.group;
    });
  });
  var desiredGroupOrder = order.map(function (panel) {
    return panel.group;
  }).filter(getUniqueValues); // PART 3: Sort panels

  panels.sort(function (a, b) {
    var panelAHasGroupCustomOrder = desiredGroupOrder.includes(a.props.group);
    var panelBHasGroupCustomOrder = desiredGroupOrder.includes(b.props.group); // if one of the elements is not in the desiredGroupOrder array, then it goes to the end of the list

    if (panelAHasGroupCustomOrder && !panelBHasGroupCustomOrder) {
      return -1;
    }

    if (!panelAHasGroupCustomOrder && panelBHasGroupCustomOrder) {
      return 1;
    } // if both elements are not in the desiredGroupOrder array, they get sorted alphabetically,
    // by group, then by name


    if (!panelAHasGroupCustomOrder && !panelBHasGroupCustomOrder) {
      return sortAlphabetically(a, b);
    } // if both elements are in the desiredGroupOrder array, they get sorted according to their order in
    // the desiredGroupOrder, then desiredNameOrder arrays.


    if (panelAHasGroupCustomOrder && panelBHasGroupCustomOrder) {
      var indexOfGroupA = desiredGroupOrder.indexOf(a.props.group);
      var indexOfGroupB = desiredGroupOrder.indexOf(b.props.group);

      if (indexOfGroupA < indexOfGroupB) {
        return -1;
      }

      if (indexOfGroupA > indexOfGroupB) {
        return 1;
      }

      if (indexOfGroupA === indexOfGroupB) {
        // Since Subpanels names can be reused in different groups
        // we compute desired order here to get the desired index right.
        // We are filtering on unique values, just in case, even if we don't
        // have to because within a given group we'd assume that there will be
        // no 2 subpanels named the same.
        var desiredNameOrder = order.filter(function (panel) {
          return panel.group === a.props.group;
        }).map(function (panel) {
          return panel.name;
        }).filter(getUniqueValues);
        var panelAHasNameCustomOrder = desiredNameOrder.includes(a.props.name);
        var panelBHasNameCustomOrder = desiredNameOrder.includes(b.props.name);

        if (!panelAHasNameCustomOrder || !panelBHasNameCustomOrder) {
          if (panelAHasNameCustomOrder && !panelBHasNameCustomOrder) {
            return -1;
          }

          if (!panelAHasNameCustomOrder && panelBHasNameCustomOrder) {
            return 1;
          }

          if (!panelAHasNameCustomOrder && !panelBHasNameCustomOrder) {
            return sortAlphabetically(a, b);
          }
        }

        if (panelAHasNameCustomOrder && panelBHasNameCustomOrder) {
          return desiredNameOrder.indexOf(a.props.name) - desiredNameOrder.indexOf(b.props.name);
        }
      }
    }

    return 0;
  }); // PART 4: Return all children

  return prePanelsChildren.concat(panels).concat(postPanelsChildren);
}
//# sourceMappingURL=sortMenu.js.map