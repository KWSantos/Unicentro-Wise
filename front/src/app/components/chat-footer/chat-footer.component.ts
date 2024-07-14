import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-footer.component.html',
  styleUrl: './chat-footer.component.css'
})
export class ChatFooterComponent {
  // Esse send message foi só pra eu tentar rodar as telas mas nao serve pra nd msm
  sendMessage ($event: Event): void {
  }
}
