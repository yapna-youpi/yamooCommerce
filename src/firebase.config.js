import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyA36OlI-VPvl34vt4KV4PeK7WpsxkxjVzg",
  authDomain: "yamoocommerce.firebaseapp.com",
  projectId: "yamoocommerce",
  storageBucket: "yamoocommerce.appspot.com",
  messagingSenderId: "860541472219",
  appId: "1:860541472219:web:72d944bff684d41ce2ebfe",
  measurementId: "G-SXE8LT805P"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);
const analytics = getAnalytics(App);

export const auth =  getAuth(App)
export default App
export const db = getFirestore(App)
export const storage = getStorage(App)