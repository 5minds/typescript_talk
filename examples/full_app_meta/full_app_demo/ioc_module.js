'use strict';

const {
  StoreEntity,
  StoreEntityTypeService,
} = require('./dist/commonjs');

const entityDiscoveryTag = require('@essential-projects/core_contracts').EntityDiscoveryTag;

function registerInContainer(container) {

  container.register('StoreEntity', StoreEntity)
    .tags(entityDiscoveryTag);

  container.register('StoreEntityTypeService', StoreEntityTypeService)
    .dependencies('DatastoreService');
}

module.exports.registerInContainer = registerInContainer;
