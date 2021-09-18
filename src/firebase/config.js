import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import auth from 'firebase/compat/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBw6ZvlZp8xLJMQyihFBaeOVjkVyAFZtJg",
    authDomain: "my-app-58146.firebaseapp.com",
    projectId: "my-app-58146",
    storageBucket: "my-app-58146.appspot.com",
    messagingSenderId: "117912611877",
    appId: "1:117912611877:web:82fcb89a736b6efcfea3cc"
  };

  const firebaseApp =  firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore();
  const auth = firebase.auth();
  export {auth}
//   export default db;