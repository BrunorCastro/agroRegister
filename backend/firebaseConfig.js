
const firebaseConfig = {
const admin = require('firebase-admin');
const serviceAccount = require('./agro-6ffc8-firebase-adminsdk-hvck8-8366ff3a8e.json');
admin.initializeApp({ credential: admin.credential.cert(serviceAccount)});
const db = admin.firestore();
//exporta a instância do Firestore Database 
module.exports = db;
};