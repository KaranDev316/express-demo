const express = require('express');
const app = express();
const genres = require('./routes/genres/genres');

app.use('/api/genres', genres);

const PORT = process.env.PORT || 3000;
const auth = require('./auth');
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get(auth);


app.get('/about', (req, res) => {
  res.send('About page');
});
app.get('/api/courses/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Course page for course with ID: ${id}`);
});
 
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
}); 