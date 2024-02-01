// Importando o Firebase Admin SDK
const admin = require('firebase-admin');

// Referência para a coleção de saúde no Firestore
const healthCollection = admin.firestore().collection('Saude');

/**
 * Adiciona um novo registro de saúde à coleção
 */
const addHealthRecord = async (req, res) => {
  try {
    // Os dados do registro de saúde são obtidos do corpo da requisição (req.body)
    const { idAnimal, dataAplicacao, lote, vacinacao, tratamento, antiparasitario } = req.body;

    // Criar um novo documento na coleção 'Saude' com os dados fornecidos
    const healthData = {
      idAnimal, 
      dataAplicacao, 
      lote, 
      vacinacao, 
      tratamento, 
      antiparasitario
    };

    // Salvar os dados no Firestore
    const healthRef = await healthCollection.add(healthData);

    // Enviar uma resposta de sucesso com o ID do novo registro de saúde
    res.status(201).send({ id: healthRef.id });
  } catch (error) {
    // Em caso de erro, enviar uma resposta de erro
    res.status(500).send(error.message);
  }
};

/**
 * Lista todos os registros de saúde
 */
const listHealthRecords = async (req, res) => {
  try {
    // Obter todos os documentos da coleção 'Saude'
    const snapshot = await healthCollection.get();

    // Mapear os documentos para um array de registros de saúde
    const healthRecords = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Enviar a lista de registros de saúde como resposta
    res.status(200).send(healthRecords);
  } catch (error) {
    // Em caso de erro, enviar uma resposta de erro
    res.status(500).send(error.message);
  }
};

/**
 * Exclui um registro de saúde específico
 */
const deleteHealthRecord = async (req, res) => {
  try {
    // O ID do registro de saúde é passado através do caminho da rota (req.params.id)
    const { id } = req.params;

    // Excluir o documento correspondente da coleção 'Saude'
    await healthCollection.doc(id).delete();

    // Enviar uma resposta de sucesso
    res.status(200).send({ id });
  } catch (error) {
    // Em caso de erro, enviar uma resposta de erro
    res.status(500).send(error.message);
  }
};

/**
 * Altera os dados de um registro de saúde específico
 */
const updateHealthRecord = async (req, res) => {
  try {
    // O ID do registro de saúde é passado através do caminho da rota
    const { id } = req.params;

    // Os novos dados do registro de saúde vêm do corpo da requisição
    const newData = req.body;

    // Atualizar o documento na coleção 'Saude' com os novos dados
    await healthCollection.doc(id).update(newData);

    // Enviar uma resposta de sucesso
    res.status(200).send({ id });
  } catch (error) {
    // Em caso de erro, enviar uma resposta de erro
    res.status(500).send(error.message);
  }
};

// Exportar as funções do controller
module.exports = {
  addHealthRecord,
  listHealthRecords,
  deleteHealthRecord,
  updateHealthRecord
};