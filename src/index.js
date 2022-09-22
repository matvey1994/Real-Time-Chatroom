// Import CSS
import './styles.css';

// Import the functions you need from the SDKs required
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, serverTimestamp, onSnapshot, query, where, orderBy, doc } from 'firebase/firestore'


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

// Queries
const q = query(colRef, orderBy('created_at'))

// GetRealtime data
onSnapshot(q,  (snapshot) => {
    let message = []
    const chatList = document.querySelector('.chat-list');
    snapshot.docs.forEach((doc) => {
        // message.push({...doc.data(), id: doc.id})
        const data = doc.data();
        const id = doc.id;
        const obj = { ...data, id }

        console.log(obj)
    })




    // message.forEach(message => {
    // const html = `
    //     <li class="list-group-item">
    //         <span class="username">${message.username}</span>
    //         <span class="message">${message.message}</span>
    //         <div class="time">${message.username}</div>
    //      </li>   
    // `;

    // chatList.innerHTML += html;
    // })


}) 


const addChatForm = document.querySelector('.new-chat')
addChatForm.addEventListener('submit', (e) => {
    e.preventDefault()

    addDoc(colRef, {
        message: addChatForm.message.value,
        created_at: serverTimestamp()
    })
    .then(() => {
        addChatForm.reset()
    })
})


    
    

