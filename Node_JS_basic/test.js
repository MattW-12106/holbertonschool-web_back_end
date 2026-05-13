// test for displayMessage function
const displayMessage = require('./0-console');
module.exports = function (message) {
  displayMessage(message);
}

//test for countStudents function
const countStudents = require('./2-read_file');

countStudents('database.csv');

try {
  countStudents('non_existent_file.csv');
} catch (err) {
  console.log(err.message);
}

// test for countStudents (Async) function
const countStudentsAsync = require('./3-read_file_async');

countStudentsAsync('database.csv')
  .then(() => {
    console.log('Students counted successfully');
  })
  .catch((err) => {
    console.log(err.message);
  });

countStudentsAsync('non_existent_file.csv')
  .then(() => {
    console.log('Students counted successfully');
  })
  .catch((err) => {
    console.log(err.message);
  });