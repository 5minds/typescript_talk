'use strict';

const ExampleServiceB = require('./dist/commonjs');

function registerInContainer(container) {

  container.register('ExampleService', ExampleServiceB);
}

module.exports.registerInContainer = registerInContainer;
