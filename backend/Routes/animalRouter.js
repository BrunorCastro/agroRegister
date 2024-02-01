const express = require('express');
const app = express();
const port = 3000;

// Habilitar o middleware para analisar JSON no corpo das requisições
app.use(express.json());

// Importar os controllers
const { addAnimal, listAnimals, deleteAnimal, updateAnimal } = require('./controllers/animaisController');
const { addLot, listLots, deleteLot, updateLot } = require('./controllers/lotesController');
const { addWeightHistory, listWeightHistories, deleteWeightHistory, updateWeightHistory } = require('./controllers/historicoPesagemController');
const { addReproduction, listReproductions, deleteReproduction, updateReproduction } = require('./controllers/reproducaoController');

// Definir rotas para a entidade "Animais"
app.post('/animals', addAnimal);
app.get('/animals', listAnimals);
app.delete('/animals/:id', deleteAnimal);
app.put('/animals/:id', updateAnimal);

// Definir rotas para a entidade "Lotes"
app.post('/lots', addLot);
app.get('/lots', listLots);
app.delete('/lots/:id', deleteLot);
app.put('/lots/:id', updateLot);

// Definir rotas para "Histórico de Pesagem"
app.post('/weightHistory', addWeightHistory);
app.get('/weightHistory', listWeightHistories);
app.delete('/weightHistory/:id', deleteWeightHistory);
app.put('/weightHistory/:id', updateWeightHistory);

// Definir rotas para "Reprodução"
app.post('/reproduction', addReproduction);
app.get('/reproduction', listReproductions);
app.delete('/reproduction/:id', deleteReproduction);
app.put('/reproduction/:id', updateReproduction);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
