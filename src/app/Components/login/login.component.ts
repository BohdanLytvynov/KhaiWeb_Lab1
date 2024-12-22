import { CommonModule } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AuthenticationService } from '../../Services/Auth/authentication.service';
import { AuthResult, IAuthResult } from '../../Interfaces/authresult';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy {
  login : string = '';
  pass : string = '';

  loginSuccess! : boolean;
  error? : string;



  constructor(    
    private router : Router, 
    @Inject(AuthenticationService) private auth : AuthenticationService
    
   )
  {

  }
  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
    this.loginSuccess = false;
    this.error = '';
  }

  //Functions

  onLoginPressed()
  {
    let result : AuthResult = this.auth.login(this.login, this.pass);

    if(!result.success)
    {
      this.loginSuccess = result.success;
      this.error = result.error;      
    }
    else
    {                        
      this.router.navigate([""]);      
    }    
  }

  onBackPressed()
  {
    this.router.navigateByUrl("");
  }
}
