// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,addDoc,setDoc,doc,getDocs,collection,onSnapshot  } from "firebase/firestore";
import { getAuth,onAuthStateChanged,signInWithPopup,signInWithEmailAndPassword,sendPasswordResetEmail,createUserWithEmailAndPassword } from 'firebase/auth';
import { getStorage,uploadBytes, ref, getDownloadURL} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0U157vTkzanTRin7Tmitwj95LauvJciY",
  authDomain: "school-2f960.firebaseapp.com",
  projectId: "school-2f960",
  storageBucket: "school-2f960.appspot.com",
  messagingSenderId: "996308547769",
  appId: "1:996308547769:web:39d3accea1814694894368"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
 const auth = getAuth();
 const storage = getStorage(app);

 //const provider = new GoogleAuthProvider();
//provider.setCustomParameters({ prompt: 'select_account' });

export {app,storage,db,auth,onSnapshot,collection,ref,getDownloadURL,uploadBytes,addDoc,setDoc,doc,getDocs ,onAuthStateChanged,signInWithEmailAndPassword,sendPasswordResetEmail,createUserWithEmailAndPassword}