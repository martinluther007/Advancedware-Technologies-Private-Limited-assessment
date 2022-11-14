const express = require("express");
const axios = require("axios");
const app = express();
const path = require("path");

// personal imports
const editReceivedData = require("./helpers/editUserData");
const csvMaker = require("./helpers/csvMaker");
const csvToObject = require("./helpers/csvToObject");
const sortData = require("./helpers/sortObject");
const fs = require("fs");

const pathToUsersCsv = path.join(__dirname, "/users.csv");
const pathToSortedUsersCsv = path.join(__dirname, "/users-sorted.csv");

const getUserData = async () => {
  const { data } = await axios.get(`https://random-data-api.com/api/v2/users`);
  return data;
};

const getAndCreateCsv = async () => {
  const data = await getUserData();
  const editedData = editReceivedData(data);
  csvMaker(editedData, pathToUsersCsv);
};

// getAndCreateCsv();

createUsersSortedCsv = (sortBy) => {
  const usersData = csvToObject(pathToUsersCsv);
  const usersSortedData = usersData.sort(sortData(sortBy, false));
  // delete file if it exists
  if (fs.existsSync(pathToFile)) {
    fs.unlinkSync(pathToSortedUsersCsv);
  }
  usersSortedData.forEach((userData) =>
    csvMaker(userData, pathToSortedUsersCsv)
  );
};
// createUsersSortedCsv();

const getUserByIdOrUsername = (param, value) => {
  const usersData = csvToObject(pathToUsersCsv);
  const [user] = usersData.filter((userData) => {
    if (userData[param] == value) return userData;
  });
  if (user) return user;
  return `no user with the ${param} of ${value}`;
};
// getUserByIdOrUsername("FirstName", "young");

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
