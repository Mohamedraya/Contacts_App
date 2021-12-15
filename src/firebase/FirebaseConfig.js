// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
//import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export  const firebaseConfig = {
  apiKey: "AIzaSyDTmttwp-3xDyuAT_n0F1NgV5tRqywiSio",
  authDomain: "employee-5d390.firebaseapp.com",
  databaseURL: "https://employee-5d390-default-rtdb.firebaseio.com",
  projectId: "employee-5d390",
  storageBucket: "employee-5d390.appspot.com",
  messagingSenderId: "544859819616",
  appId: "1:544859819616:web:3ba0c0ec1c2ad5e8447d05",
  measurementId: "G-EMV6NTQ6CN"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default getFirestore();
//export const database = getDatabase(app);
//const dbRef = ref(database);



