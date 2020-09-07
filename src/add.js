#!/usr/bin/env node
const commander = require("commander");
const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs");
const os = require("os");
inquirer.registerPrompt("datetime", require("inquirer-datepicker-prompt"));
// const dbInfo = require("../data/db.json");

function sqladd(Utitle, Udescription, Udeadline, Ucategory) {
  const dataBuffer = fs.readFileSync(os.homedir() + "/todo/data.json");
  const dataJSON = dataBuffer.toString();
  console.log("저장 중 💫");
  const input = {
    title: Utitle,
    description: Udescription,
    deadline: Udeadline,
    category: Ucategory,
  };
  const inputJSON = JSON.stringify(dataJSON + "," + input);
  fs.writeFileSync(os.homedir() + "/todo/data.json", inputJSON);
  return;
}

let isComplete = false;
const add = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "할 일을 입력하세요.🖋 ",
      },
      {
        type: "input",
        name: "description",
        message: "할 일을 상세히 입력하세요.📝 ",
      },
      {
        type: "datetime",
        name: "deadline",
        message: "할 일의 마감일을 입력하세요.⌛ ",
        format: ["yyyy", "/", "mm", "/", "dd", " ", "hh", ":", "MM"],
      },
      {
        type: "input",
        name: "categry",
        message: "할 일의 종류를 입력하세요.🗄 ",
        default: "main",
      },
      {
        type: "confirm",
        name: "confirm",
        message: "이거 맞나요??",
        default: true,
      },
    ])
    .then((answers) => {
      if (answers.confirm == true) {
        console.log("할 일을 추가합니다.📝 ");
        sqladd(
          answers.title,
          answers.description,
          answers.deadline,
          answers.category
        );
        console.log("할 일을 추가했습니다.🗞 ");
      } else if (answers.confirm == false) {
        add();
      }
    });
};
//add();
module.exports = add;
