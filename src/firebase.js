import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC55l2ur3-rzzriuaaXq-mxBWt7XEW595E",
  authDomain: "netflix-clone-efdb3.firebaseapp.com",
  projectId: "netflix-clone-efdb3",
  storageBucket: "netflix-clone-efdb3.appspot.com",
  messagingSenderId: "547805967521",
  appId: "1:547805967521:web:893e0dd468e9b7c3e46ce0"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;