// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDPLNJ782JrgK0sY4iZiWaf6tduBljc1Us',
  authDomain: 'mova-44174.firebaseapp.com',
  projectId: 'mova-44174',
  storageBucket: 'mova-44174.appspot.com',
  messagingSenderId: '548157305102',
  appId: '1:548157305102:web:fb4677aaefcd404226275f',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
