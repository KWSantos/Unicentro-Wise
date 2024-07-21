import { Injectable } from '@angular/core';
import { db } from "../../config/firebaseConfig";
import { onValue, ref } from 'firebase/database';
import Message from '../entities/Message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  
  loadMessage(userId: string) {
    const refMessagesLoad = ref(db, "messages/" + userId);
    let messages: Message[] = [];
    onValue(refMessagesLoad, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const messageData = childSnapshot.val();
        messages.push(new Message(
          messageData.from,
          messageData.idUser,
          messageData.time,
          messageData.message
        ));
      });
    }, {
      onlyOnce: true
    });
    return messages
  }
  
}
