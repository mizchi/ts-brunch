function TSCompiler(brunchCfg) {}
  var config = brunchCfg && brunchCfg.plugins && brunchCfg.plugins.ts;
}
TSCompiler.prototype.brunchPlugin = true;
TSCompiler.prototype.type = 'javascript';
TSCompiler.prototype.extension = 'ts';

TSCompiler.prototype.compile = function(params, callback) {
  return callback(null, "module.exports = {foo: 'bar'};");
};

module.exports = TSCompiler;
