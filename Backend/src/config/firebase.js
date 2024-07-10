import dotenv from 'dotenv';
import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth
} from 'firebase/auth';
import serviceAccount from '../FirebaseService.json' assert { type: 'json'};

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

initializeApp(firebaseConfig);

// initializing Firebase admin SDK -- this code is not right
//initializeApp({
//  credential: admin.credential.cert(serviceAccount)
//});

export { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, getAuth };
