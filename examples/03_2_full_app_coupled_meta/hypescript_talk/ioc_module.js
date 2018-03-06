'use strict';

const TypescriptTalkService = require('./dist/commonjs/index').TypescriptTalkService;

function registerInContainer(container) {

  container.register('TalkService', TypescriptTalkService);
}

module.exports.registerInContainer = registerInContainer;
