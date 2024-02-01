import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyC25iSFW3ucWd5unS9lVZvxdsQITrCoT8Q",
    authDomain: "agroregister21.firebaseapp.com",
    projectId: "agroregister21",
    storageBucket: "agroregister21.appspot.com",
    messagingSenderId: "461102722548",
    appId: "1:461102722548:web:3f3fd75a2b40156e215da1",
    measurementId: "G-HSN8NTQRNM"
  };

  if(! firebase.apps.length){
     // Abrir minha conexao
  const app = initializeApp(firebaseConfig);
  }

  export default firebase;