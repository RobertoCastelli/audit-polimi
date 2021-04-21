import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
let firebaseConfig = {
	apiKey: 'AIzaSyBuVRX6dKvJLyFzkwecrC_dSMLQpiYAyNQ',
	authDomain: 'audit-polimi.firebaseapp.com',
	projectId: 'audit-polimi',
	storageBucket: 'audit-polimi.appspot.com',
	messagingSenderId: '974208324120',
	appId: '1:974208324120:web:6c0ca473952be3da06a96d',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()

export { db, auth }
