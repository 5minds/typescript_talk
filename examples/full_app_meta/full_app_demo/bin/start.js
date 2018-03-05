'use strict';

const InvocationContainer = require('addict-ioc').InvocationContainer;
const logger = require('loggerhythm').Logger.createLogger('bootstrapper');

const iocModuleNames = [
  '@essential-projects/bootstrapper',
  '@essential-projects/bootstrapper_node',
  '@essential-projects/caching',
  '@essential-projects/core',
  '@essential-projects/data_model',
  '@essential-projects/data_model_contracts',
  '@essential-projects/datasource_adapter_base',
  '@essential-projects/datasource_adapter_postgres',
  '@essential-projects/datastore',
  '@essential-projects/event_aggregator',
  '@essential-projects/http_extension',
  '@essential-projects/iam',
  '@essential-projects/invocation',
  '@essential-projects/messagebus',
  '@essential-projects/messagebus_adapter_faye',
  '@essential-projects/messagebus',
  '@essential-projects/metadata',
  '@essential-projects/pki_service',
  '@essential-projects/security_service',
  '@essential-projects/validation',
  'graphql_talk',
  'talk_http',
];

const iocModules = iocModuleNames.map((moduleName) => {
  return require(`${moduleName}/ioc_module`);
});

async function start() {
  
  const container = new InvocationContainer({
    defaults: {
      conventionCalls: ['initialize'],
    },
  });

  for (const iocModule of iocModules) {
    iocModule.registerInContainer(container);
  }

  container.validateDependencies();

  try {
    const bootstrapper = await container.resolveAsync('AppBootstrapper');
    await bootstrapper.start();

    logger.info('Bootstrapper started successfully.');
  } catch(error) {
    logger.error('Bootstrapper failed to start.', error);
  }
}

start();
