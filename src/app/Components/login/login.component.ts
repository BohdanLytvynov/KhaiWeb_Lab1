import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login : string = '';
  pass : string = '';

  constructor(private router : Router)
  {
    
  }

  //Functions

  onLoginPressed()
  {
    
  }

  onBackPressed()
  {
    this.router.navigateByUrl("");
  }
}
