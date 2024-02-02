// Importar o Express e inicializar o aplicativo
const express = require('express');
const app = express();

// Importar o controller de animais que você criou
const { addAnimal, listAnimals, deleteAnimal, updateAnimal } = require('./backend/Controllers/Animal.js');

// Configurar o Express para analisar JSON no corpo das requisições
app.use(express.json());

// Definir as rotas para as operações CRUD de 'Animal'
// POST para adicionar um novo animal
app.post('/animals', addAnimal);

// GET para listar todos os animais
app.get('/animals', listAnimals);

// DELETE para remover um animal pelo ID
app.delete('/animals/:id', deleteAnimal);

// PUT para atualizar os dados de um animal pelo ID
app.put('/animals/:id', updateAnimal);

// Definir a porta para o servidor Express ouvir
const PORT = process.env.PORT || 3000;

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

