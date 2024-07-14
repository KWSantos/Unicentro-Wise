import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAvOLLWnS479UMaoMH_UrPcKZv062EH5zw",
  authDomain: "unicentrowise.firebaseapp.com",
  projectId: "unicentrowise",
  storageBucket: "unicentrowise.appspot.com",
  messagingSenderId: "974732100926",
  appId: "1:974732100926:web:e2682ee9037d29d579d86f"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { app, db, auth }