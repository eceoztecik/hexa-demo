import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDyn1qFE4oMbSn6W-Ja3fM_IU7oW6CHric",
  authDomain: "hexa-demo-7b44a.firebaseapp.com",
  projectId: "hexa-demo-7b44a",
  storageBucket: "hexa-demo-7b44a.appspot.com",
  messagingSenderId: "52625237340",
  appId: "1:52625237340:web:84a4e9f0a43f4d5e740d99",
  measurementId: "G-EJPMS4S36ZC"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app, db };
