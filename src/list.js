#!/usr/bin/env node
const commander = require("commander");
const inquirer = require("inquirer");
const chalk = require("chalk");
inquirer.registerPrompt("datetime", require("inquirer-datepicker-prompt"));
const os = require("os");
const fs = require("fs");
const homePath = os.homedir();
const dataPath = homePath + "/todo";
// const data = require(dataPath + "/data.json");

// const dbInfo = require("../data/db.json");

function list() {
  console.log("정보를 가져옵니다.");
  fs.readFile(os.homedir() + "/todo/data.json", function (err, data) {
    var jsonobj = JSON.parse(data);
    for (i = 0; i < jsonobj.length; i++) {
      if (jsonobj[i] == null) {
        continue;
      } else {
        console.log(
          i +
            " | " +
            jsonobj[i].title +
            " | " +
            jsonobj[i].description +
            " | " +
            jsonobj[i].state +
            " | " +
            jsonobj[i].deadline +
            " | " +
            jsonobj[i].category
        );
      }
    }
    // console.log(jsonobj.length);
  });
  return;
  // for (var i = 0; i < 1000; i++) {}
}

// var responseData = {};
// var query = connection.query("select * from test", function (err, rows) {});

module.exports = list;
