import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import Message from '../../models/entities/Message';
import { AuthService } from '../../models/services/AuthService';


@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  @Input() message!: Message;
  userId: string | undefined;
  constructor (private readonly authService: AuthService) {
    this.userId = authService.getUserId();
  }
}
