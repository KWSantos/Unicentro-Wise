import { Routes } from "@angular/router";
import { LoginComponent } from './components/login/login.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatFooterComponent } from './components/chat-footer/chat-footer.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { MessageComponent } from './components/message/message.component';
import { ChatHistoryComponent } from './components/chat-history/chat-history.component';
import { AuthGuard } from "./config/auth/auth.guard";

export const routes: Routes = [
    { path: '', redirectTo:'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    {
        path: 'chat', component: ChatComponent,
        children: [
            {path: '', component: ChatFooterComponent},
            {path: 'message', component: ChatMessageComponent, children: [ {path: '', component: MessageComponent}]},
            {path: 'chatHistory', component: ChatHistoryComponent}
        ],
        canActivate: [AuthGuard]
    }
];
