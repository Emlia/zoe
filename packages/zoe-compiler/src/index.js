const { compile } = require("./compile");
const shelljs = require("shelljs");
const path = require("path");

function compiler(files, { rootPath, distPath, dist }) {
  const project = ["xml", "js", "css", "asset"].reduce((pre, cur) => {
    pre[cur] = new Set();
    return pre;
  }, {});
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (
      file.startsWith("node_modules") ||
      shelljs.test("-d", file) ||
      file.startsWith(dist)
    ) {
      continue;
    }
    if (shelljs.test("-f", file)) {
      const ext = path.extname(file);
      switch (ext) {
        case ".axml":
          project.xml.add(file);
          break;
        case ".js":
          project.js.add(file);
          break;
        case ".acss":
          project.css.add(file);
          break;
        default:
          project.asset.add(file);
      }
    }
  }
  compile(project, { rootPath, distPath });
}
module.exports = compiler;
