import { Component} from '@angular/core';
import { ChatFooterComponent } from '../chat-footer/chat-footer.component';
import { ChatMessageComponent } from '../chat-message/chat-message.component';
import { MessageComponent } from '../message/message.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [ChatFooterComponent, ChatMessageComponent, MessageComponent, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  
}
