import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../models/services/UserService';
import { AuthService } from '../../models/services/AuthService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-footer.component.html',
  styleUrl: './chat-footer.component.css',
  providers: [UserService, AuthService]
})

export class ChatFooterComponent {

  message: string = '';
  @Output() sendMessageEvent = new EventEmitter<string>();

  sendMessage(event: Event) {
    event.preventDefault();
    if (this.message.trim()) {
      this.sendMessageEvent.emit(this.message);
      this.message = '';
    }
  }
}
