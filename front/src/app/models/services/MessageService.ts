import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';



@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private PATH : string = 'messages';

  constructor(private firestore: AngularFirestore) { }

  getMessagesByUserId(userId: string): Observable<any[]> {
    return this.firestore.collection(this.PATH, ref => ref.where('userId', '==', userId)).valueChanges();
  }
  
  
}
