// gulpfile.js

const uswds = require("@uswds/compile");

// USWDS version
uswds.settings.version = 3;

// Path settings
uswds.paths.dist.css = './src/assets/css';
uswds.paths.dist.theme = './src/styles/uswds';

// Export tasks
exports.init = uswds.init;
exports.compile = uswds.compile;
exports.watch = uswds.watch;
