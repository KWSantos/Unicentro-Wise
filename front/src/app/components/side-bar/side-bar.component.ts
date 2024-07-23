import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../models/services/MessageService';
import { AuthService } from '../../models/services/AuthService';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit{

  chats: any[] | undefined;
  userId = this.authService.getUserId();

  constructor(private messageService: MessageService, private authService: AuthService) {}

  async ngOnInit(): Promise<void> {
    this.chats = await this.messageService.getConversations(this.userId);
  }
}
