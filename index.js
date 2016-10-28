/**
 * Created by cshao on 10/28/16.
 */

'use strict';

var origin_concat = Array.prototype.concat;

exports.enable = function() {
  Array.prototype.concat = function() {
    if (this.length === 2 && this[0] === '.js' && this[1] === '.json') {
      return origin_concat.apply(arguments[0], this);
    }
    return origin_concat.apply(this, arguments);
  };
};

exports.disable = function() {
  Array.prototype.concat = origin_concat;
};
