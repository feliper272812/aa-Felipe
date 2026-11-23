const express = require('express');
const app = express();
const port = 3000;

// Rota principal (página inicial)
app.get('/', (req, res) => {
  res.send('Olá! O seu servidor local está funcionando.');
});

// Inicia o servidor na porta definida
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

