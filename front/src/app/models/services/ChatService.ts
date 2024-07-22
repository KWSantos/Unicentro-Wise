import { Injectable } from '@angular/core';
import { push, ref, set } from 'firebase/database';
import { io, Socket } from "socket.io-client";
import { db } from '../../config/firebaseConfig';

@Injectable({
    providedIn: 'root'
})
export class ChatService {
    private readonly socket: Socket;
    private response: string = '';

    constructor() {
        this.socket = io('http://localhost:3000');
        this.socket.on('response', (data) => {
            this.response = data.message;
        });
    }

    async sendMessage(userId: string | undefined, question: string, conversationId: string) {
        this.socket.emit('message', question);
        await new Promise<void>((resolve) => {
            this.socket.once('response', (data) => {
                this.response = data.message;
                resolve();
            });
        });

        const refConversation = ref(db, "messages/" + userId + "/" + conversationId);
        const newMessage = push(refConversation);

        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();

        await set(newMessage, {
            from: "chat",
            userId: userId,
            message: this.response,
            time: `${hours}:${minutes}`
        });
    }
}
