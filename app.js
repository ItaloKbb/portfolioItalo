// index.js

// Importa o módulo express
const express = require('express');

// Cria uma instância do express
const app = express();

// Define a porta na qual o servidor irá ouvir
const port = process.env.PORT || 3000;

// Serve arquivos estáticos do diretório 'public'
app.use(express.static('public'));

// Define uma rota para a raiz que envia o arquivo index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Inicia o servidor e ouve na porta definida
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
