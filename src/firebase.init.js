import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZJYAJY8QJYhdFxpZKgZk-CP3UEVS427Y",
  authDomain: "ara-planner.firebaseapp.com",
  projectId: "ara-planner",
  storageBucket: "ara-planner.appspot.com",
  messagingSenderId: "239817031081",
  appId: "1:239817031081:web:71272fdfd64a3544fcd8b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
