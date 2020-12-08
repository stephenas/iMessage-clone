import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAOBqxJ534BqVwxhzKGRmNE8AereMJUZds",
  authDomain: "imessage-clone-bc02b.firebaseapp.com",
  projectId: "imessage-clone-bc02b",
  storageBucket: "imessage-clone-bc02b.appspot.com",
  messagingSenderId: "1039237706980",
  appId: "1:1039237706980:web:977443a4923cd397f9e8f1",
  measurementId: "G-ZGCKLVC8YP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
