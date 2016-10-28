/**
 * Created by cshao on 10/28/16.
 */

'use strict';

var assert = require('assert');
var _ = require('lodash');
var browserifyHighPriorityExtensions = require('../');

describe('Test browserify-high-priority-extensions', function() {
  var browserifyDefaultExtensionsArray = ['.js', '.json'];
  var ordinaryArray = ['test', 42];

  it('should change browserify extensions array behaviour after enabled', function() {
    browserifyHighPriorityExtensions.enable();
    assert(_.isEqual(browserifyDefaultExtensionsArray.concat(['.ext1', '.ext2']), ['.ext1', '.ext2', '.js', '.json']));
    browserifyHighPriorityExtensions.disable();
  });

  it('should keep ordinary array behaviour', function() {
    browserifyHighPriorityExtensions.enable();
    assert(_.isEqual(ordinaryArray.concat(['.ext1', '.ext2']), ['test', 42, '.ext1', '.ext2']));
    browserifyHighPriorityExtensions.disable();
  });

  it('should reset array behaviour after disabled', function() {
    browserifyHighPriorityExtensions.enable();
    browserifyHighPriorityExtensions.disable();
    assert(_.isEqual(browserifyDefaultExtensionsArray.concat(['.ext1', '.ext2']), ['.js', '.json', '.ext1', '.ext2']));
  });
});