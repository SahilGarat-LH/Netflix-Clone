import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA_WuEe7U17JUjtceTNxGvjc7rhwkNtMUU",
    authDomain: "netflix-27bf2.firebaseapp.com",
    projectId: "netflix-27bf2",
    storageBucket: "netflix-27bf2.appspot.com",
    messagingSenderId: "493814342075",
    appId: "1:493814342075:web:dbdc82ed79b5218590249e"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)

  const db=firebaseApp.firestore()

  const auth = firebase.auth()

  export {auth}
  
  export default db;