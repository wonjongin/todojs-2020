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
  if (!fs.existsSync(dataPath + "/data.json"))
    fs.writeFile(dataPath + "/data.json", "", function (err) {
      if (err === null) {
        // console.log("success");
      } else {
        // console.log("fail");
      }
    });
}
module.exports = mkdir;
