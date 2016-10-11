/**
 * sails-generate-sails.io.js
 *
 * Usage:
 * `sails generate sails.io.js`
 *
 * @description Generates a `sails.io.js` file.
 * @help See http://sailsjs.com/docs/concepts/extending-sails/generators
 */

module.exports = {

  /**
   * The files/folders to generate.
   * @type {Dictionary}
   */

  targets: {

    './assets/js/dependencies/sails.io.js': { template: 'sails.io.js' }

  },


  /**
   * The absolute path to the `templates` for this generator
   * (for use with the `template` helper)
   *
   * > Note that, in this case, the templates folder is actually deferred
   * > to a dependency: an NPM package called `sails.io.js-dist`.
   *
   * @type {String}
   */
  templatesDirectory: require('path').dirname(require.resolve('sails.io.js-dist'))
  // ^^FUTURE: consider changing this.
  //
  // Currently, require.resolve could return something like:
  // `/Users/mikermcneil/code/sails-generate-sails.io.js/node_modules/sails.io.js-dist/sails.io.js'
  // But in certain edge cases w/ different npm versions + npm link, it seems like it might
  // potentially return something else, which could cause an issue when combining w/ dirname
  // (because it goes up one too many dirs).  This could be related to the issue w/ the skipAssets
  // tests in Sails...

};
