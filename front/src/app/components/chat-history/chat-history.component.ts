import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MessageService } from '../../models/services/MessageService';
import { AuthService } from '../../models/services/AuthService';

interface Chat {
  id: string;
  messages: any[];
}

@Component({
  selector: 'app-chat-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent implements OnInit {
  userId = this.authService.getUserId();
  conversations: Chat[] = [];

  @Output() chatSelected = new EventEmitter<string>();

  constructor(
    private messageService: MessageService,
    private authService: AuthService,
    private router: Router
  ) {}

  async ngOnInit() {
    const conversationsData = await this.messageService.getConversations(this.userId);
    this.conversations = conversationsData ? Object.keys(conversationsData).map(key => ({ id: key, messages: conversationsData[key] })) : [];
    this.conversations.reverse();
  }

  selectConversation(conversationId: string) {
    this.chatSelected.emit(conversationId);
  }
}