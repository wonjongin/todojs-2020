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
  // for (var i = 0; i < 1000; i++) {}
}

// var responseData = {};
// var query = connection.query("select * from test", function (err, rows) {});

module.exports = list;
