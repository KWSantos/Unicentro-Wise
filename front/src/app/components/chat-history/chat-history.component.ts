import { Component } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { CommonModule } from '@angular/common';
export interface Chats {
  nome: string
}

@Component({
  selector: 'app-chat-history',
  standalone: true,
  imports: [MessageComponent,CommonModule],
  templateUrl: './chat-history.component.html',
  styleUrl: './chat-history.component.css'
})
export class ChatHistoryComponent {
  chat: Chats[] = [{nome: "Quais editais?"} ,{nome:"Sei la"} ]
}
