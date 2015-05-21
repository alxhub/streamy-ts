var _ = require('lodash');
var GlobFilter = require('broccoli-glob-filter');
var path = require('path');

function LodashRenderer(inputTree, options) {
  if (!(this instanceof LodashRenderer)) {
    return new LodashRenderer(inputTree, options);
  }
  GlobFilter.apply(this, arguments);
}
LodashRenderer.prototype = Object.create(GlobFilter.prototype);
LodashRenderer.prototype.constructor = LodashRenderer;
LodashRenderer.prototype.processFileContent = function(content, relPath, srcDir) {
  return [
    {
      path: popExtension(relPath),
      content: _.template(content)(this.options.context)
    }
  ];
};

function popExtension(x) {
  return path.join(path.dirname(x), path.basename(x, path.extname(x)));
}

module.exports = LodashRenderer;
