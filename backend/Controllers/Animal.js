// Importando o Firebase Admin SDK
const admin = require('firebase-admin');
// Assumindo que o admin SDK já foi inicializado em outro lugar do projeto.

// Referência para a coleção de animais no Firestore
const animalsCollection = admin.firestore().collection('Animais');

/**
 * Adiciona um novo animal à coleção
 */
const addAnimal = async (req, res) => {
  try {
    // Os dados do animal viriam do corpo da requisição (req.body)
    const { nome, matriz, reprodutor, CHIP, sexo, dataNascimento, pesoNascimento, raca, porte, observacao } = req.body;

    // Criar um novo documento na coleção 'Animais' com os dados fornecidos
    const animalData = {
      nome, 
      matriz, 
      reprodutor, 
      CHIP, 
      sexo, 
      dataNascimento, 
      pesoNascimento, 
      raca, 
      porte, 
      observacao
    };

    // Salvar os dados no Firestore
    const animalRef = await animalsCollection.add(animalData);

    // Enviar uma resposta de sucesso com o ID do novo animal
    res.status(201).send({ id: animalRef.id });
  } catch (error) {
    // Em caso de erro, enviar uma resposta de erro
    res.status(500).send(error.message);
  }
};

/**
 * Lista todos os animais
 */
const listAnimals = async (req, res) => {
  try {
    // Obter todos os documentos da coleção 'Animais'
    const snapshot = await animalsCollection.get();

    // Mapear os documentos para um array de animais
    const animals = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Enviar a lista de animais como resposta
    res.status(200).send(animals);
  } catch (error) {
    // Em caso de erro, enviar uma resposta de erro
    res.status(500).send(error.message);
  }
};

/**
 * Exclui um animal específico
 */
const deleteAnimal = async (req, res) => {
  try {
    // O ID do animal é passado através do caminho da rota (req.params.id)
    const { id } = req.params;

    // Excluir o documento correspondente da coleção 'Animais'
    await animalsCollection.doc(id).delete();

    // Enviar uma resposta de sucesso
    res.status(200).send({ id });
  } catch (error) {
    // Em caso de erro, enviar uma resposta de erro
    res.status(500).send(error.message);
  }
};

/**
 * Altera os dados de um animal específico
 */
const updateAnimal = async (req, res) => {
  try {
    // O ID do animal é passado através do caminho da rota
    const { id } = req.params;

    // Os novos dados do animal viriam do corpo da requisição
    const newData = req.body;

    // Atualizar o documento na coleção 'Animais' com os novos dados
    await animalsCollection.doc(id).update(newData);

    // Enviar uma resposta de sucesso
    res.status(200).send({ id });
  } catch (error) {
    // Em caso de erro, enviar uma resposta de erro
    res.status(500).send(error.message);
  }
};

// Exportar as funções do controller
module.exports = {
  addAnimal,
  listAnimals,
  deleteAnimal,
  updateAnimal
};