import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOr4ZGZ3bQzH-3pPLaf4J6e8-_oweEr8U",
  authDomain: "listatareasreact-ed1bf.firebaseapp.com",
  projectId: "listatareasreact-ed1bf",
  storageBucket: "listatareasreact-ed1bf.appspot.com",
  messagingSenderId: "980613520418",
  appId: "1:980613520418:web:d3d7b383512c0962b6be7b"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta 'auth' y 'firestore'
export const auth = getAuth(app);
export const firestore = getFirestore(app);
