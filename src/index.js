// Import CSS
import './styles.css';

// Import the functions you need from the SDKs required
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, addDoc, Timestamp } from 'firebase/firestore'


// Web App's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBEGOdVOiIj0vQdw2JqahZ4T6eChTlgix4",
    authDomain: "web-app-chat-23477.firebaseapp.com",
    projectId: "web-app-chat-23477",
    storageBucket: "web-app-chat-23477.appspot.com",
    messagingSenderId: "989822326103",
    appId: "1:989822326103:web:0016be9930acd9570b5a12"
}

// Initialise Firebase App
initializeApp(firebaseConfig)

// Initialise Service
const db = getFirestore()

// Collection Ref
const colRef = collection(db, 'chats')

// GetRealtime data
getDocs(colRef)
    .then((snapshot) => {
        let message = []
        snapshot.docs.forEach((doc) => {
            message.push({ 
                 ...doc.data(),
                 id: doc.id
            })
        })
        console.log(message)
    })
    .catch(err => {
        console.log(err.message)
    })


const addChatForm = document.querySelector('.new-chat')
addChatForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const now = new Date()

    addDoc(colRef, {
        message: addChatForm.message.value,
        created_at: Timestamp.fromDate(now)

    })
    .then(() => {
        addChatForm.reset()
    })
})

// class Chatroom {
//     constructor(room, username) {
//         this.room = room;
//         this.username = username;
//         this.chats = colRef;
//     }
//     // async addChat(message){
//     //     // Format a chat object
//     //     const now = new Date();
//     //     const chat = {
//     //         message,
//     //         username: this.username,
//     //         room: this.room,
//     //         created_at: Timestamp.fromDate(now)
//     //     };
//     //     // Save the chat document
//     //     const response = await this.chats.add(chat);
//     //     return response
//     // } 
// }

// const chatroom = new Chatroom('gaming', 'matvey')
// console.log(chatroom)
// chatroom.addChat('hello everyone')
//     .then(() => console.log('chat added'))
//     .catch(err => console.log(err))



    
    

