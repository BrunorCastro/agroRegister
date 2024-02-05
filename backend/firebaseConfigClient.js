import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Seu objeto de configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCmNlarpRwUaLXQuVmJI1fFNlBU0itroS8",
  authDomain: "agro-6ffc8.firebaseapp.com",
  databaseURL: "https://agro-6ffc8-default-rtdb.firebaseio.com",
  projectId: "agro-6ffc8",
  storageBucket: "agro-6ffc8.appspot.com",
  messagingSenderId: "735432721248",
  appId: "1:735432721248:web:252dae65a7c0fb62279405",
  measurementId: "G-F82Q6EBM18",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
