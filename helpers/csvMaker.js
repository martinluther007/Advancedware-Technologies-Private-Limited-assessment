const fs = require("fs");

const csvMaker = (userData, pathToFile) => {
  const csvRows = [];
  let userHeaders;

  if (!fs.existsSync(pathToFile) || fs.statSync(pathToFile).size <= 0) {
    userHeaders = Object.keys(userData);
    csvRows.push(userHeaders.join(","));
    const userValues = Object.values(userData).join(",");
    csvRows.push(userValues);
    fs.writeFileSync(pathToFile, csvRows.join("\n"), "utf-8");
  } else {
    const userValues = Object.values(userData).join(",");
    csvRows.push(userValues);
    fs.appendFileSync(pathToFile, `\n ${csvRows.join("\n")}`, "utf-8");
  }
};

module.exports = csvMaker;
