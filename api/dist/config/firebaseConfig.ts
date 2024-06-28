import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvOLLWnS479UMaoMH_UrPcKZv062EH5zw",
  authDomain: "unicentrowise.firebaseapp.com",
  projectId: "unicentrowise",
  storageBucket: "unicentrowise.appspot.com",
  messagingSenderId: "974732100926",
  appId: "1:974732100926:web:e2682ee9037d29d579d86f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth}