import { initializeApp } from "firebase";


const app = initializeApp({
   
        apiKey: "AIzaSyDQIj0bFxIYnu9cBNRcdJ6mII8qWaXkZyU",
        authDomain: "website-ccbc0.firebaseapp.com",
        databaseURL: "https://website-ccbc0.firebaseio.com",
        projectId: "website-ccbc0",
        storageBucket: "website-ccbc0.appspot.com",
        messagingSenderId: "73865911907"

    
});
export const db = app.database()
export const booksRef = db.ref('books')
export const personsRef = db.ref('users')
export const projectsRef = db.ref('projects')




