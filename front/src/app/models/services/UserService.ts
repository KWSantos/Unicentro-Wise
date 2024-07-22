import { get, push, ref, set, update } from "firebase/database";
import { db } from "../../config/firebaseConfig";
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

    async sendMessage(userId: string | undefined, message: string, conversationId: string) {
        
        const refConversation = ref(db, "messages/" + userId + "/" + conversationId);
        const newMessage = push(refConversation);

        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();

        await set(newMessage, {
            from: "user",
            userId: userId,
            message: message,
            time: `${hours}:${minutes}`
        });
    }
}