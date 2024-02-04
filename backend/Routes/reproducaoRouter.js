// Importar o Express e inicializar o aplicativo
const express = require('express');
const app = express();

// Importar o controller de Reprodução
const { addReproduction, listReproductions, deleteReproduction, updateReproduction } = require('./backend/Controllers/Reproducao.js');

// Configurar o Express para analisar JSON no corpo das requisições
app.use(express.json());

// Definir as rotas para as operações CRUD de 'Reprodução'
// POST para adicionar um novo registro de reprodução
app.post('/reproduction', addReproduction);

// GET para listar todos os registros de reprodução
app.get('/reproduction', listReproductions);

// DELETE para remover um registro de reprodução pelo ID
app.delete('/reproduction/:id', deleteReproduction);

// PUT para atualizar os dados de um registro de reprodução pelo ID
app.put('/reproduction/:id', updateReproduction);

// Definir a porta para o servidor Express ouvir
const PORT = process.env.PORT || 3000;

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
