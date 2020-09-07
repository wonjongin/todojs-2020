const os = require("os");
const fs = require("fs");

function mkdir() {
  const homePath = os.homedir();
  const dataPath = homePath + "/todo";
  const makeFolder = (dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  };
  makeFolder(dataPath);
}
module.exports = mkdir;
