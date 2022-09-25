const shelljs = require("shelljs");
const path = require("path");
function compile(project, { rootPath, distPath }) {
  const { xml, js, css, asset } = project;
  for (const item of asset) {
    console.log(item);
    const dirname = path.dirname(path.resolve(distPath, item));
    // console.log(dirname);
    if (dirname && !shelljs.test("-d", dirname)) {
      shelljs.mkdir("-p", dirname);
    }
    shelljs.cp(
      "-rf",
      path.resolve(rootPath, item),
      path.resolve(distPath, item)
    );
  }
}
module.exports = { compile };
