const express = require('express');
const app = express();
const PORT = 8080;

app.get('/users', (req, res) => {
  res.send({users:[{name:'Shashikumar', age: 31}]});
});

app.get('/hello', (req, res) => {
  res.send('Hello !');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
