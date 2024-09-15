import { Routes } from '@angular/router';
import { StartPageComponent } from './Components/start-page/start-page.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';

export const routes: Routes = [
    {path: "", component: StartPageComponent},
    {path: "feedback", component: FeedbackComponent},
    {path: "**", redirectTo: "/"}
];
