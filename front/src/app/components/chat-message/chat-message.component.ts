import { Component } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { CommonModule } from '@angular/common';

// Interface pra tapar buraco
export interface Message {
  from: string
  text: string
}

@Component({
  selector: 'app-chat-message',
  standalone: true,
  imports: [MessageComponent,CommonModule],
  templateUrl: './chat-message.component.html',
  styleUrl: './chat-message.component.css'
})
export class ChatMessageComponent {
  // Messages só serve pra tapar buraco, ignore, é só pra rodar as telas, totalmente diferente 
  messages: Message[] = [{from: "user", text : "oi"}, {from: "chat", text:"kaka"}];

  constructor () {
  }
}
