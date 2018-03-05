'use strict';

const ExampleServiceA = require('./dist/commonjs');

function registerInContainer(container) {

  container.register('ExampleService', ExampleServiceA);
}

module.exports.registerInContainer = registerInContainer;
