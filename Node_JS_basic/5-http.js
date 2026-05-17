const http = require('http');
const fs = require('fs');
 
const database = process.argv[2];
 
const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
 
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);
 
    const output = [`Number of students: ${students.length}`];
 
    const fields = {};
    for (const student of students) {
      const columns = student.split(',');
      const firstname = columns[0];
      const field = columns[3];
 
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }
 
    for (const [field, names] of Object.entries(fields)) {
      output.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
 
    resolve(output.join('\n'));
  });
});
 
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
 
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(database)
      .then((data) => {
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((err) => {
        res.end(`This is the list of our students\n${err.message}`);
      });
  } else {
    res.end('Hello Holberton School!');
  }
});
 
app.listen(1245);
 
module.exports = app;
 