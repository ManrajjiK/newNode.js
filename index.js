require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello Mannu Bhai from Express.js 🚀');
});

app.get('/login', (req, res) => {
  res.send('<h1> Please login in Chai aur Code </h1>');
});

app.get('/youtube', (req, res) => {
  res.send('<h1> YouTube section of Chai aur Code </h1>');
});

console.log("PORT from .env:", process.env.PORT);       
console.log("DB_USER from .env:", process.env.DB_USER);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
