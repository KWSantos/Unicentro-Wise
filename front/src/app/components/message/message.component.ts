import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


// Fiz uma interface aqui só pra tapar buraco tbm
export interface Message {
  from: string
  text: string
}

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  // Só pra tapar buraco e rodar a tela pt.454 :)
  @Input() message: Message = { from: '', text: '' };

  constructor () {

  }
}
