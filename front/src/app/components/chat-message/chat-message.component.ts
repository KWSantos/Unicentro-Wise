import { Component, OnInit } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { CommonModule } from '@angular/common';
import { MessageService } from '../../models/services/MessageService';
import { AuthService } from '../../models/services/AuthService';
import Message from '../../models/entities/Message';


@Component({
  selector: 'app-chat-message',
  standalone: true,
  imports: [MessageComponent, CommonModule],
  providers: [MessageService, AuthService],
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})

export class ChatMessageComponent implements OnInit {
  messages: Message[] = [];
  userId: string | undefined;


  constructor(private messageService: MessageService, private authService : AuthService) { }

  ngOnInit(): void {
    this.userId = this.authService.getUserId();

    if (this.userId) {
      this.messages = this.messageService.loadMessage(this.userId);
    }
  }

}
