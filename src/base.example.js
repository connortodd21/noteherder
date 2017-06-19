import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'

//Initialize firebase
const app = firebase.initializeApp({
    apiKey: "YOUR API KEY HERE",
    authDomain: "YOUR-APP.firebase.com",
    databaseURL: "https://YOUR-APP.firebaseio.com",
    projectId: "YOUR-APP",
    storageBucket: "",
    messagingSenderId: "YOUR MESSAGING SENDER ID"
  });

//Initialize database
const db = database(app)

export default Rebase.createClass(db)