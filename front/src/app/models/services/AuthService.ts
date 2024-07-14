import { Injectable } from "@angular/core";
import { app, auth } from "../../config/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth, onAuthStateChanged } from "firebase/auth";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    private auth = getAuth(app  )

    async signUp (email: string, password: string) {
        return await createUserWithEmailAndPassword(auth, email, password)
    }
    
    async signIn(email: string, password: string){
        return await signInWithEmailAndPassword(auth, email, password)
    }
    
    async logout() {
        return await signOut(this.auth)
    }

    getUser() {
        return new Promise((resolve, reject) => {
          onAuthStateChanged(this.auth, user => {
            if (user) {
              resolve(user);
            } else {
              reject(null);
            }
          });
        });
      }
}