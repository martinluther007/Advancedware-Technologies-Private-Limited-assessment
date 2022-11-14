# assessment for the Advancedware Technologies Private Limited company
---
## code breakdown and description

This code starts from the entry point **server.js** which contains the functions for all the required tasks as stated in the assessment pdf. The functions to run the required tasks is made up of smaller reusable helper functions that helps in achieving certain purposes as explained below.

It all starts with the function *init* which initializes the process by calling the **getAndCreateCsv** function in intervals which is defined next
next is the function *getAndCreateCsv* which is made up of three helper functions as follows:

1. **getUserData** which is an async function that fetches users data from the randomData api and returns it

2. **editReceivedData** which is a function that formats the fetched data to contain our custom keys for easy manipulation,
this function returns an object, below is an example look for the objext 
```
{ id:1,
  FirstName: "John",
  LastName: "Smith",
  Username: "john.smith",
  Email:"john.smith@email.com",
  Avatar:"img.jpg",
  gender:"Male",
  DoB:"1977-04-21",
  Address:"john smith address"
}
```

3. **csvMaker** which is a function that takes 2 arguments 
- data (data to create csv file from)
- pathToFile (path to create csv file)( "making it as reusable as possible")
and creates *users.csv* file in the specified path

Next is the *createUsersSortedCsv* which fulfils the second task of creating a 'users-sorted.csv' file by applying a sorting algorithm to an input field
it is also made up of three helper functions which breakdowns as follows

1. **csvToObject** which takes in one argument which is "path to csv file" and coverts that file to an array javascript objects for easier processing and returns that array

2. **sortData** which takes 2 arguments a "field" to sort by and "reverse" which dictates the order to sortBy (ascending or descending). this returns a sorted version of the input data;

3. **csvMaker** which is defined previously


Lastly is the *getUserByIdOrUsername* function which fulfils the last task, it takes in 2 arguments "param" which dictates what fields to find a user by ==Note: the param value represents keys of the user object and must be a property included in the users object as displayed previously above==, and "value" to search the parameter by
it is also made up of one helper function which breakdowns as follows

1. **csvMaker** which is defined previously

## dependencies

- axios
- nodemon
- express
- Node.js v16.16.0 or later
- Npm v8.11.0 or later

---

## Installation/Getting Started
First, clone the project:

```bash
git clone https://github.com/martinluther007/Advancedware-Technologies-Private-Limited-assessment.git
```
CD into the project directory

Install dependencies:

```bash
npm install
# or
yarn
```

Run the development server:

```bash
npm start
# or
yarn start
```