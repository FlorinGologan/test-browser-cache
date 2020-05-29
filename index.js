const express = require('express');
const exphbs = require('express-handlebars');
const cacheControl = require('express-cache-controller');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(cacheControl({
  maxAge: 3
}));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/api/', (req, res) => {
  const date = new Date().getTime();
  console.log('hit', date);
  res.send({date});
});

app.listen(3000);