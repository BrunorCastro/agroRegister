// Importando o Firebase Admin SDK
const admin = require('firebase-admin');

// Referência para a coleção de histórico de pesagem no Firestore
const weightHistoryCollection = admin.firestore().collection('HistoricoPesagem');

/**
 * Adiciona um novo registro ao histórico de pesagem
 */
const addWeightHistory = async (req, res) => {
  try {
    // Os dados de pesagem são obtidos do corpo da requisição (req.body)
    const { idAnimal, dataInicio, dataFim } = req.body;

    // Criar um novo documento na coleção 'HistoricoPesagem' com os dados fornecidos
    const weightHistoryData = {
      idAnimal, 
      dataInicio, 
      dataFim
    };

    // Salvar os dados no Firestore
    const weightHistoryRef = await weightHistoryCollection.add(weightHistoryData);

    // Enviar uma resposta de sucesso com o ID do novo registro de pesagem
    res.status(201).send({ id: weightHistoryRef.id });
  } catch (error) {
    // Em caso de erro, enviar uma resposta de erro
    res.status(500).send(error.message);
  }
};

/**
 * Lista todos os registros de histórico de pesagem
 */
const listWeightHistories = async (req, res) => {
  try {
    // Obter todos os documentos da coleção 'HistoricoPesagem'
    const snapshot = await weightHistoryCollection.get();

    // Mapear os documentos para um array de registros de pesagem
    const weightHistories = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Enviar a lista de registros como resposta
    res.status(200).send(weightHistories);
  } catch (error) {
    // Em caso de erro, enviar uma resposta de erro
    res.status(500).send(error.message);
  }
};

/**
 * Exclui um registro de histórico de pesagem específico
 */
const deleteWeightHistory = async (req, res) => {
  try {
    // O ID do registro de pesagem é passado através do caminho da rota (req.params.id)
    const { id } = req.params;

    // Excluir o documento correspondente da coleção 'HistoricoPesagem'
    await weightHistoryCollection.doc(id).delete();

    // Enviar uma resposta de sucesso
    res.status(200).send({ id });
  } catch (error) {
    // Em caso de erro, enviar uma resposta de erro
    res.status(500).send(error.message);
  }
};

/**
 * Altera os dados de um registro de histórico de pesagem específico
 */
const updateWeightHistory = async (req, res) => {
  try {
    // O ID do registro de pesagem é passado através do caminho da rota
    const { id } = req.params;

    // Os novos dados do registro de pesagem vêm do corpo da requisição
    const newData = req.body;

    // Atualizar o documento na coleção 'HistoricoPesagem' com os novos dados
    await weightHistoryCollection.doc(id).update(newData);

    // Enviar uma resposta de sucesso
    res.status(200).send({ id });
  } catch (error) {
    // Em caso de erro, enviar uma resposta de erro
    res.status(500).send(error.message);
  }
};

// Exportar as funções do controller
module.exports = {
  addWeightHistory,
  listWeightHistories,
  deleteWeightHistory,
  updateWeightHistory
};
