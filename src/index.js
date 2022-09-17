import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection,getDocs
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBEGOdVOiIj0vQdw2JqahZ4T6eChTlgix4",
    authDomain: "web-app-chat-23477.firebaseapp.com",
    projectId: "web-app-chat-23477",
    storageBucket: "web-app-chat-23477.appspot.com",
    messagingSenderId: "989822326103",
    appId: "1:989822326103:web:0016be9930acd9570b5a12"
}

// init firebase app
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'chats')

// get collection data
getDocs(colRef)
    .then((snapshot) => {
        let message = []
        snapshot.docs.forEach((doc) => {
            message.push({ ...doc.data(), id: doc.id })
        })
        console.log(message)
    })
    .catch(err => {
        console.log(err.message)
    })
