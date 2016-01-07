require('jasmine_dom_matchers');

global.ReactTestUtils = require('react/lib/ReactTestUtils');
global.React = require('react');
global.ReactDOM = require('react/lib/ReactDOM');
global.jQuery = global.$ = require('jquery');

$.fn.simulate = function(eventName, ...args) {
  if (!this.length) {
    throw new Error(`jQuery Simulate has an empty selection for '${this.selector}'`);
  }
  $.each(this, function() {
    if (['mouseOver', 'mouseOut', 'click'].indexOf(eventName) !== -1) {
      ReactTestUtils.SimulateNative[eventName](this, ...args);
    } else {
      ReactTestUtils.Simulate[eventName](this, ...args);
    }
  });
  return this;
};

beforeEach(function () {
  $('body').find('#root').remove().end().append('<main id="root"/>');
});

afterEach(function () {
  $('body').find('#root').remove().end().append('<main id="root"/>');
});