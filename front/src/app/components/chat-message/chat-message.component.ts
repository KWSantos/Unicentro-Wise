import { Component, OnInit } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { CommonModule } from '@angular/common';
import { MessageService } from '../../models/services/MessageService';
import { AuthService } from '../../models/services/AuthService';

// Interface pra tapar buraco
export interface Message {
  from: string
  text: string
}

@Component({
  selector: 'app-chat-message',
  standalone: true,
  imports: [MessageComponent, CommonModule],
  providers: [MessageService, AuthService],
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})

export class ChatMessageComponent implements OnInit {
  messages: Message[] = [{from: "user", text : "oi"}, {from: "chat", text:"Olá"}];
  userId: string | undefined;


  constructor(private messageService: MessageService, private authService : AuthService) { }

  ngOnInit(): void {
    // Aqui você precisa setar o ID do usuário de alguma forma
    this.userId = this.authService.getUserId();

    if (this.userId) {
      this.messageService.getMessagesByUserId(this.userId).subscribe(messages => {
        this.messages = messages;
      });
    }
  }

}
