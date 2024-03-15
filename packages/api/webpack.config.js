const { composePlugins, withNx } = require('@nx/webpack'); // or `@nrwl/webpack` if you are not on Nx 16

module.exports = composePlugins(
  // Default Nx composable plugin
  withNx(),
  // Custom composable plugin
  (config, { options, context }) => {
    // `config` is the Webpack configuration object
    // `options` is the options passed to the `@nx/webpack:webpack` executor
    // `context` is the context passed to the `@nx/webpack:webpack` executor
    // customize configuration here
    options.outputPath = 'dist/packages/api';
    options.tsConfig = 'packages/api/tsconfig.app.json';
    options.main = 'packages/api/src/main.ts';

    options.fileReplacements = [
      {
        replace: 'packages/api/src/environments/environment.ts',
        with: 'packages/api/src/environments/environment.prod.ts',
      },
    ];
    options.extractLicenses = true;
    options.optimization = process.env.NODE_ENV === 'production' ? true : false;

    return config;
  }
);
