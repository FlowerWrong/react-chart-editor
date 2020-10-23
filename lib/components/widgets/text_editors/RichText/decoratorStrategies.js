"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findLinkEntities = void 0;

var _draftJs = require("draft-js");

/*
 * A decoratorStrategy is used by `draft-js` to determine how to render
 * content beyond inline styles. We use them to render LINK entities.
 *
 * See https://facebook.github.io/draft-js/docs/advanced-topics-decorators.html#content
 * and
 * https://facebook.github.io/draft-js/docs/advanced-topics-entities.html#content
 */
var characterIsLinkEntity = function characterIsLinkEntity(character) {
  var entityKey = character.getEntity();

  if (entityKey === null) {
    return false;
  }

  var entity = _draftJs.Entity.get(entityKey);

  return entity.getType() === 'LINK';
};

var findLinkEntities = function findLinkEntities(contentBlock, callback) {
  contentBlock.findEntityRanges(characterIsLinkEntity, callback);
};

exports.findLinkEntities = findLinkEntities;
//# sourceMappingURL=decoratorStrategies.js.map