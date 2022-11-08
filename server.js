const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const port = 3001;


app.get("/", function (req, res) {
  res.send("Oi, mundo :-)");
});

function soma(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

app.post('/soma', function (req, res) {
  var body = req.body;
  var resultado = soma(body.a, body.b);
  res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});

app.post('/sub', function (req, res) {
  var body = req.body;
  var resultado = sub(body.a, body.b);
  res.send(`O resultado da subtração de ${body.a} e ${body.b} é ${resultado}`);
});

app.post('/mult', function (req, res) {
  var body = req.body;
  var resultado = mult(body.a, body.b);
  res.send(`O resultado da multiplicação de ${body.a} e ${body.b} é ${resultado}`);
});

app.post('/div', function (req, res) {
  var body = req.body;
  var resultado = div(body.a, body.b);
  res.send(`O resultado da divisão de ${body.a} e ${body.b} é ${resultado}`);
});


// iniciando o processo do servidor
app.listen(port, function () {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});
