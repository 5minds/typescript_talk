'use strict';

const TalkRouter = require('./dist/commonjs/index').TalkRouter;
const TalkController = require('./dist/commonjs/index').TalkController;
const routerDiscoveryTag = require('@essential-projects/core_contracts').RouterDiscoveryTag;

function registerInContainer(container) {

  container.register('TalkRouter', TalkRouter)
    .dependencies('TalkController')
    .tags(routerDiscoveryTag)
    .singleton()
    .configure('talk:router');

  container.register('TalkController', TalkController)
    .dependencies('TalkService')
    .singleton();
}

module.exports.registerInContainer = registerInContainer;
