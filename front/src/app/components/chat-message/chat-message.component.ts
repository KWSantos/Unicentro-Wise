import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { CommonModule } from '@angular/common';
import { MessageService } from '../../models/services/MessageService';
import { AuthService } from '../../models/services/AuthService';

@Component({
  selector: 'app-chat-messages',
  standalone: true,
  imports: [MessageComponent, CommonModule],
  providers: [MessageService, AuthService],
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})

export class ChatMessageComponent implements OnChanges {
  @Input() messages: any[] | undefined;

  ngOnChanges() {
    const messagesContainer = document.getElementById('messages');
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }

}
