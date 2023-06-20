import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDRjvPocqwcMx8TOGd7IdVSK4p660IAmtg',
  authDomain: 'musicapp-152f8.firebaseapp.com',
  projectId: 'musicapp-152f8',
  storageBucket: 'musicapp-152f8.appspot.com',
  appId: '1:1029411465780:web:6d68a4be5d114906227861'
};

// Initalize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`)
});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export{
    auth,
    db,
    storage,
    usersCollection,
    songsCollection,
    commentsCollection,
};