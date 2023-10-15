// soal2.js
const fs = require("fs");

const logData = "This is a log entry.";

fs.appendFile("log.txt", logData + "\n", (err) => {
  if (err) throw err;
  console.log("Log entry added to log.txt");
});
