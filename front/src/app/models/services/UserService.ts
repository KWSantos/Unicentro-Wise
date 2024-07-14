import { get, push, ref, set, update } from "firebase/database";
import { db } from "../../config/firebaseConfig";
import { AuthService } from "./AuthService";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class UserService {

    async store(userId: string, email: string, password: string) {

        try{
            return set(ref(db, 'users/' + userId), {
                email: email,
                password: password
            }) 
        } catch(error) {
            return error
        }
    
    }

    async updateUser(userId: string, email: string, password: string) {

        try {
            const userRef = ref(db, 'users/' + userId)
            return update(userRef, {
                email: email,
                password: password
            })
        } catch (error) {
            return error
        }
    }

    sendMessage(userId: string, message: string) {

    }
}