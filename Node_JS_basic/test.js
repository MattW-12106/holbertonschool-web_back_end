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