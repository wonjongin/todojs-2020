#!/usr/bin/env node
const commander = require("commander");
const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs");
const os = require("os");
const add = require("./src/add");
const list = require("./src/list");
const { exitOverride } = require("commander");
const mkdir = require("./src/mkdir");

const ver = "0.0.2";
let selectorder = false;

mkdir();

const ordermsg = [
  "할 일 보기👀",
  "할 일 추가📝",
  "할 일 수정🔧",
  "할 일 다함🎉",
  "할 일 삭제🗑",
  "나가기👋",
  //new inquirer.Separator(),
];
const order = () => {
  inquirer
    .prompt([
      {
        type: "rawlist",
        name: "order",
        message: "할일을 고르세요🗂",
        choices: ordermsg,
      },
    ])
    .then((answers) => {
      if (answers.order == ordermsg[0]) {
        console.log("할 일을 볼까요?");
        list();
      } else if (answers.order == ordermsg[1]) {
        console.log("할 일을 추가해 볼까요?");
        add();
      } else if (answers.order == ordermsg[2]) {
        console.log("할 일을 수정합시다.");
        //add();
      } else if (answers.order == ordermsg[3]) {
        console.log("할 일을 다했군요");
        //add();
      } else if (answers.order == ordermsg[4]) {
        console.log("할 일을 삭제해 볼까요?");
        //add();
      } else if (answers.order == ordermsg[5]) {
        console.log("안녕히 가십시오!!");
        process.exit(1);
        //add();
      } else {
        console.log("그런거 없네요");
      }
    });
};

commander.version(ver, "-v, --version").usage("[option]");
commander
  //   .arguments("<count>")
  //   .option("-u, --username [username]", "깃허브 계정", "account")
  //   .option("-e, --email [email]", "이메일", "account")
  .action(function (count) {
    console.log(
      chalk.rgb(128, 128, 128)("Todo for cli ver. " + ver + ' | type "help"')
    );
    order();
  })
  .parse(process.argv);
commander
  .command("*", { noHelp: true }) // 도움말을 띄우지 말고,
  .action(() => {
    console.log("해당 명령어를 찾을 수 없습니다.");
    program.help();
  });
// commander
//   .command("*", { noHelp: true }) // 도움말을 띄우지 말고,
//   .action(() => {
//     console.log("해당 명령어를 찾을 수 없습니다.");
//     commander.help();
//   });

// * ===================================================
// * 기호 설명
// * -- 옵션 - 단축옵션
// * <필수로 넣어야 하는 것> [선택적으로 넣어도 되는 것]
// * *: 와일드카드 (나머지 처리)
// *
// * type: 프롬프트 종류
// * name: 질문명
// * message: 메시지
// * choices: 선택지
// * default: 기본값
// * ====================================================
