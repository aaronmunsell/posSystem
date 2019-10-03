// posRobot.js
// Author: Aaron Munsell
// Date:   20191003

// This program aims to run point of sale automated processes all the while
// using robot to enter through prompts that are brought up when the processes are run,
// removing the need for human interaction.

const { exec } = require("child_process");
const robot = require("robotjs");

exec('mshta javascript:alert("Hello world!");close();');

setTimeout(function() {
  robot.keyTap("enter");
}, 5000);
