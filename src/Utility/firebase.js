// we're importing the core Firebase library, as well as the
// functions for authentication and the Firestore database
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration for the Firebase project you created in the Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyBdNaorQeCldj_1fpIlnE-u8BCqn8IBwoQ",
  authDomain: "clone-bf-36669.firebaseapp.com",
  projectId: "clone-bf-36669",
  storageBucket: "clone-bf-36669.firebasestorage.app",
  messagingSenderId: "32259425743",
  appId: "1:32259425743:web:ab413f40e5f52f597b3eba",
};

// Initialize the Firebase app. This creates a new instance of the Firebase app, which is the entry point for all  Firebase functionality
const app = firebase.initializeApp(firebaseConfig);

// Get the authentication service for signing in and out of your app
export const auth = getAuth(app);

// Get the Firestore database for storing and retrieving data
export const db = app.firestore();
