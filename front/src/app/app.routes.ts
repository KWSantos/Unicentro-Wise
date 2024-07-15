import { Routes } from "@angular/router";
import { LoginComponent } from './components/login/login.component';
import { ChatComponent } from './components/chat/chat.component';
import { AuthGuard } from "./config/auth/auth.guard";
import { RegisterComponent } from "./components/register/register.component";

export const routes: Routes = [
    { path: '', redirectTo:'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    {path: 'chat', component: ChatComponent,canActivate: [AuthGuard]}
];
