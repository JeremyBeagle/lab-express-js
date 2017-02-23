const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(expressLayouts);
app.set('layout', 'layouts/main-layout');

app.get('/', (req, res, next) => {
  res.render('home');
  //how do I reference the url of the page?
});

app.get('/projects', (req, res, next) => {
  res.render('projects');
});

app.listen(3000, () =>{
  console.log('Online');
});
