const path = require("path");
const shelljs = require("shelljs");
const compiler = require("../../zoe-compiler/src/index");
function build(options) {
  const { name, dist } = options;
  const rootPath = process.cwd();
  const distPath = path.resolve(rootPath, dist);
  shelljs.mkdir("-p", distPath);
  const files = shelljs.ls("-R", rootPath);
  compiler(files, { rootPath, distPath, dist });
  // console.log("++ cli", name, dist);
}

module.exports = { build };
