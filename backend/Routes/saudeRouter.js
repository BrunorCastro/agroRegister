// Importar o Express e inicializar o aplicativo
const express = require('express');
const app = express();

// Importar o controller de Saúde
const { addHealthRecord, listHealthRecords, deleteHealthRecord, updateHealthRecord } = require('./backend/Controllers/Saude.js');

// Configurar o Express para analisar JSON no corpo das requisições
app.use(express.json());

// Definir as rotas para as operações CRUD de 'Saúde'
// POST para adicionar um novo registro de saúde
app.post('/health', addHealthRecord);

// GET para listar todos os registros de saúde
app.get('/health', listHealthRecords);

// DELETE para remover um registro de saúde pelo ID
app.delete('/health/:id', deleteHealthRecord);

// PUT para atualizar os dados de um registro de saúde pelo ID
app.put('/health/:id', updateHealthRecord);

// Definir a porta para o servidor Express ouvir
const PORT = process.env.PORT || 3000;

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
