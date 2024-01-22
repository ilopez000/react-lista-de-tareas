import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "Pon el tuyo",
  authDomain: "Pon el tuyo",
  projectId: "Pon el tuyo",
  storageBucket: "Pon el tuyo",
  messagingSenderId: "Pon el tuyo",
  appId: "Pon el tuyo"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta 'auth' y 'firestore'
export const auth = getAuth(app);
export const firestore = getFirestore(app);
