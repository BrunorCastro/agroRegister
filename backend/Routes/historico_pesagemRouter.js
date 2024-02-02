// Importar o Express e inicializar o aplicativo
const express = require('express');
const app = express();

// Importar o controller de Histórico de Pesagem
const { addWeightHistory, listWeightHistories, deleteWeightHistory, updateWeightHistory } = require('./backend/Controllers/Historico_pesagem.js');


// Configurar o Express para analisar JSON no corpo das requisições
app.use(express.json());

// Definir as rotas para as operações CRUD de 'Histórico de Pesagem'
// POST para adicionar um novo registro de pesagem
app.post('/weightHistory', addWeightHistory);

// GET para listar todos os registros de pesagem
app.get('/weightHistory', listWeightHistories);

// DELETE para remover um registro de pesagem pelo ID
app.delete('/weightHistory/:id', deleteWeightHistory);

// PUT para atualizar os dados de um registro de pesagem pelo ID
app.put('/weightHistory/:id', updateWeightHistory);

// Definir a porta para o servidor Express ouvir
const PORT = process.env.PORT || 3000;

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
