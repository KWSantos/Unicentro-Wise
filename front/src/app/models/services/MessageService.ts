import { Injectable } from '@angular/core';
import { db } from "../../config/firebaseConfig";
import { get, push, ref } from 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  async startNewConversation(userId: string | undefined) {
    const refUserMessages = ref(db, "messages/" + userId);
    const newConversation = push(refUserMessages);
    return newConversation.key;
  }

  async getConversations(userId: string | undefined) {
      const refUserMessages = ref(db, "messages/" + userId);
      const snapshot = await get(refUserMessages);
      return snapshot.val();
  }
  
}
