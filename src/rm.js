const fs = require("fs");
const os = require("os");
const inquirer = require("inquirer");
const chalk = require("chalk");

var remove_empty = function (target) {
  Object.keys(target).map(function (key) {
    if (target[key] instanceof Object) {
      if (
        !Object.keys(target[key]).length &&
        typeof target[key].getMonth !== "function"
      ) {
        delete target[key];
      } else {
        remove_empty(target[key]);
      }
    } else if (target[key] === null) {
      delete target[key];
    }
  });
};

function rm() {
  fs.readFile(os.homedir() + "/todo/data.json", function (err, data) {
    inquirer
      .prompt([
        { type: "number", name: "id", message: "삭제 할 일을 입력하세요.🗑 " },
      ])
      .then((answer) => {
        var jsonobj = JSON.parse(data);
        const id = answer.id;
        jsonobj = jsonobj.filter((e) => jsonobj.indexOf(e) !== id);
        // fs.writeFileSync(os.homedir() + "/todo/data.json", "");
        fs.writeFileSync(
          os.homedir() + "/todo/data.json",
          JSON.stringify(jsonobj)
        );
      });
  });
  return;
}
module.exports = rm;
