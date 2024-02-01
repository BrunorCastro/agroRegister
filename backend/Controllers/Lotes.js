// Importando o Firebase Admin SDK
const admin = require('firebase-admin');

// Referência para a coleção de lotes no Firestore
const lotsCollection = admin.firestore().collection('Lotes');

/**
 * Adiciona um novo lote à coleção
 */
const addLot = async (req, res) => {
  try {
    // Os dados do lote são obtidos do corpo da requisição (req.body)
    const { numeroLote, dataInicio, dataFim, idAnimal } = req.body;

    // Criar um novo documento na coleção 'Lotes' com os dados fornecidos
    const lotData = {
      numeroLote, 
      dataInicio, 
      dataFim, 
      idAnimal // Este campo deve ser uma referência ao documento de um Animal, se for necessário associar um Lote diretamente a um Animal
    };

    // Salvar os dados no Firestore
    const lotRef = await lotsCollection.add(lotData);

    // Enviar uma resposta de sucesso com o ID do novo lote
    res.status(201).send({ id: lotRef.id });
  } catch (error) {
    // Em caso de erro, enviar uma resposta de erro
    res.status(500).send(error.message);
  }
};

/**
 * Lista todos os lotes
 */
const listLots = async (req, res) => {
  try {
    // Obter todos os documentos da coleção 'Lotes'
    const snapshot = await lotsCollection.get();

    // Mapear os documentos para um array de lotes
    const lots = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Enviar a lista de lotes como resposta
    res.status(200).send(lots);
  } catch (error) {
    // Em caso de erro, enviar uma resposta de erro
    res.status(500).send(error.message);
  }
};

/**
 * Exclui um lote específico
 */
const deleteLot = async (req, res) => {
  try {
    // O ID do lote é passado através do caminho da rota (req.params.id)
    const { id } = req.params;

    // Excluir o documento correspondente da coleção 'Lotes'
    await lotsCollection.doc(id).delete();

    // Enviar uma resposta de sucesso
    res.status(200).send({ id });
  } catch (error) {
    // Em caso de erro, enviar uma resposta de erro
    res.status(500).send(error.message);
  }
};

/**
 * Altera os dados de um lote específico
 */
const updateLot = async (req, res) => {
  try {
    // O ID do lote é passado através do caminho da rota
    const { id } = req.params;

    // Os novos dados do lote vêm do corpo da requisição
    const newData = req.body;

    // Atualizar o documento na coleção 'Lotes' com os novos dados
    await lotsCollection.doc(id).update(newData);

    // Enviar uma resposta de sucesso
    res.status(200).send({ id });
  } catch (error) {
    // Em caso de erro, enviar uma resposta de erro
    res.status(500).send(error.message);
  }
};

// Exportar as funções do controller
module.exports = {
  addLot,
  listLots,
  deleteLot,
  updateLot
};