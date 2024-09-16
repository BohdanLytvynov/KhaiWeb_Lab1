import { Routes } from '@angular/router';
import { StartPageComponent } from './Components/start-page/start-page.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';

export const routes: Routes = [
    {path: "", component: StartPageComponent},
    {path: "feedback", component: FeedbackComponent},
    {path: "login", component: LoginComponent},
    {path: "signup", component: SignUpComponent},
    {path: "**", redirectTo: "/"}
];
