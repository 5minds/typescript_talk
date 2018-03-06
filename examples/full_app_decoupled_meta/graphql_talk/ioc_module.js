'use strict';

const GraphQlTalkService = require('./dist/commonjs/index').GraphQlTalkService;

function registerInContainer(container) {

  container.register('TalkService', GraphQlTalkService);
}

module.exports.registerInContainer = registerInContainer;
