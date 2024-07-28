import { Component, OnInit } from '@angular/core';
import { ChatFooterComponent } from '../chat-footer/chat-footer.component';
import { ChatMessageComponent } from '../chat-message/chat-message.component';
import { MessageComponent } from '../message/message.component';
import { CommonModule } from '@angular/common';
import { ChatHistoryComponent } from '../chat-history/chat-history.component';
import { AuthService } from '../../models/services/AuthService';
import { MessageService } from '../../models/services/MessageService';
import { UserService } from '../../models/services/UserService';
import { ChatService } from '../../models/services/ChatService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [ChatFooterComponent, ChatMessageComponent, MessageComponent, CommonModule, ChatHistoryComponent],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  userId = this.authService.getUserId();
  conversationId!: any;
  messages: any[] = [];

  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    private userService: UserService,
    private chatService: ChatService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.conversationId = await this.messageService.startNewConversation(this.userId);
    await this.loadMessages();
  }

  async sendMessage(message: string) {
    await this.userService.sendMessage(this.userId, message, this.conversationId);
    await this.loadMessages();
    await this.chatService.sendMessage(this.userId, message, this.conversationId);
    await this.loadMessages();
  }

  async loadMessages() {
    const conversations = await this.messageService.getConversations(this.userId);
    this.messages = conversations ? Object.values(conversations[this.conversationId]) : [];
  }

  async onChatSelected(conversationId: string) {
    this.conversationId = conversationId;
    await this.loadMessages();
  }
}
