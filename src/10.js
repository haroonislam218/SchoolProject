
const express = require('express');
const app = express();

// create a new route for GET requests to /api/students
app.get('/api/students', (req, res) => {
  // retrieve students from database
  const students = [{ name: 'John Doe', grade: 12 }, { name: 'Jane Doe', grade: 10 }];

  // return the students as JSON data
  res.json(students);
});

// start the server
const port = 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));