// Importar o Express e inicializar o aplicativo
const express = require('express');
const app = express();

// Importar o controller de Lotes
const { addLot, listLots, deleteLot, updateLot } = require('./backend/Controllers/Lotes.js');

// Configurar o Express para analisar JSON no corpo das requisições
app.use(express.json());

// Definir as rotas para as operações CRUD de 'Lotes'
// POST para adicionar um novo lote
app.post('/lots', addLot);

// GET para listar todos os lotes
app.get('/lots', listLots);

// DELETE para remover um lote pelo ID
app.delete('/lots/:id', deleteLot);

// PUT para atualizar os dados de um lote pelo ID
app.put('/lots/:id', updateLot);

// Definir a porta para o servidor Express ouvir
const PORT = process.env.PORT || 3000;

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
