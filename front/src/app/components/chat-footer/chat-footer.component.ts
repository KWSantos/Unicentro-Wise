import { Component } from '@angular/core';
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

  message!: string;
  constructor(private userService: UserService, private authService: AuthService){}

  sendMessage ($event: Event): void { 
    const userId = this.authService.getUserId()
    this.userService.sendMessage(userId, this.message)
  }
}
