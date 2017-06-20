import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'
import 'firebase/auth'

//Initialize firebase
const app = firebase.initializeApp({
    apiKey: "YOUR API KEY HERE",
    authDomain: "YOUR-APP.firebase.com",
    databaseURL: "https://YOUR-APP.firebaseio.com",
    projectId: "YOUR-APP",
    storageBucket: "YOUR-STORAGE-BUCKET",
    messagingSenderId: "YOUR MESSAGING SENDER ID"
  });

//Initialize database
const db = database(app)

export const auth = app.auth()
export const githubProvider = new firebase.auth.GithubAuthProvider()
export const googleProvider = new firebase.auth.GoogleAuthProvider()

export default Rebase.createClass(db)