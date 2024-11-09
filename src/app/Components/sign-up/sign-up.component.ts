import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
   login : string = '';
   firstname : string = '';
   lastname : string = '';
   pass1 : string = '';
   pass2 : string = '';
   agree : boolean = false;

   //Functions

  constructor(private router : Router)
  {

  }

   onPassChanged(value : string)
   {
      
   }

   onSignIn()
   {

   }

   onBackPressed()
   {
     this.router.navigateByUrl("");
   }
}
