const fs = require("fs");

const csvToObject = (path) => {
  const usersBuffer = fs.readFileSync(path);
  let usersBufferString = usersBuffer.toString();
  const usersData = usersBufferString.split("\n");
  const usersObjData = [];
  const headers = usersData[0].split(",");

  for (let i = 1; i < usersData.length; i++) {
    let currentUser = usersData[i].split(",");
    let currentUserObj = {};
    for (let i = 0; i < currentUser.length; i++) {
      currentUserObj[headers[i]] = currentUser[i];
    }
    usersObjData.push(currentUserObj);
  }

  return usersObjData;
};

module.exports = csvToObject;
