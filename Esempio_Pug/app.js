var express = require('express');
var app = express();
const people = require('./people.json'); //Copia il file people.json dentro la variabile people

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public')); // Dico ad express dove recuperare i file statici

app.get('/', function (req, res) {
  res.render('index', { //oggetto JSON
   title: 'Homepage',
   content : 'Questa pagina parla del mondo e di tanto altro',
   people: people.profiles //Passa il vettore profiles alla pagina index.pug

 });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});