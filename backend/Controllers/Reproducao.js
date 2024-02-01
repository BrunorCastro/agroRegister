// Importando o Firebase Admin SDK
const admin = require('firebase-admin');

// Referência para a coleção de reprodução no Firestore
const reproductionCollection = admin.firestore().collection('Reproducao');

/**
 * Adiciona um novo registro de reprodução
 */
const addReproduction = async (req, res) => {
  try {
    // Os dados de reprodução são obtidos do corpo da requisição (req.body)
    const { idAnimal, matriz, periodoInicio, periodoFim, reprodutor, nome, lote, observacoes } = req.body;

    // Criar um novo documento na coleção 'Reproducao' com os dados fornecidos
    const reproductionData = {
      idAnimal, 
      matriz, 
      periodoInicio, 
      periodoFim, 
      reprodutor, 
      nome, 
      lote, 
      observacoes
    };

    // Salvar os dados no Firestore
    const reproductionRef = await reproductionCollection.add(reproductionData);

    // Enviar uma resposta de sucesso com o ID do novo registro de reprodução
    res.status(201).send({ id: reproductionRef.id });
  } catch (error) {
    // Em caso de erro, enviar uma resposta de erro
    res.status(500).send(error.message);
  }
};

/**
 * Lista todos os registros de reprodução
 */
const listReproductions = async (req, res) => {
  try {
    // Obter todos os documentos da coleção 'Reproducao'
    const snapshot = await reproductionCollection.get();

    // Mapear os documentos para um array de registros de reprodução
    const reproductions = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Enviar a lista de registros como resposta
    res.status(200).send(reproductions);
  } catch (error) {
    // Em caso de erro, enviar uma resposta de erro
    res.status(500).send(error.message);
  }
};

/**
 * Exclui um registro de reprodução específico
 */
const deleteReproduction = async (req, res) => {
  try {
    // O ID do registro de reprodução é passado através do caminho da rota (req.params.id)
    const { id } = req.params;

    // Excluir o documento correspondente da coleção 'Reproducao'
    await reproductionCollection.doc(id).delete();

    // Enviar uma resposta de sucesso
    res.status(200).send({ id });
  } catch (error) {
    // Em caso de erro, enviar uma resposta de erro
    res.status(500).send(error.message);
  }
};

/**
 * Altera os dados de um registro de reprodução específico
 */
const updateReproduction = async (req, res) => {
  try {
    // O ID do registro de reprodução é passado através do caminho da rota
    const { id } = req.params;

    // Os novos dados do registro de reprodução vêm do corpo da requisição
    const newData = req.body;

    // Atualizar o documento na coleção 'Reproducao' com os novos dados
    await reproductionCollection.doc(id).update(newData);

    // Enviar uma resposta de sucesso
    res.status(200).send({ id });
  } catch (error) {
    // Em caso de erro, enviar uma resposta de erro
    res.status(500).send(error.message);
  }
};

// Exportar as funções do controller
module.exports = {
  addReproduction,
  listReproductions,
  deleteReproduction,
  updateReproduction
};
