import { CommonModule } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AuthenticationService } from '../../Services/Auth/authentication.service';
import { AuthResult, IAuthResult } from '../../Interfaces/authresult';
import { Validator } from '../../Interfaces/validator/ValidatorBase';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

result : AuthResult = new AuthResult()

errorMsg : string = ''

loginenable : boolean = false

@ViewChild('loginElem', {static: false})
loginRef! : ElementRef<HTMLElement>

@ViewChild('password', {static: false})
passref! : ElementRef<HTMLElement>

validator : Validator

onLoginChanged(arg0: string) 
{  
  if(arg0.length == 0)
    this.validator.SetValidArrayItem(0, false)
  else
    this.validator.SetValidArrayItem(0, true)

  this.loginenable = this.validator.CheckValidArray(0, 1)  
}

onPassChanged(arg0: string) 
{
  if(arg0.length == 0)
    this.validator.SetValidArrayItem(1, false)
  else
    this.validator.SetValidArrayItem(1, true)

    this.loginenable = this.validator.CheckValidArray(0, 1)  
}

  login : string = '';
  pass : string = '';
  rememberMe : boolean = false

  loginSuccess! : boolean;
  error? : string;

  constructor(    
    private router : Router, 
    @Inject(AuthenticationService) private auth : AuthenticationService
    
   )
  {
    this.validator = new Validator(2)
  }

  ngOnInit(): void {
    this.loginSuccess = false;
    this.error = '';   
  }

  //Functions

  onLoginPressed()
  {
    if(!this.loginenable) return
    
    this.result = this.auth.login(this.login, this.pass);

    if(this.result.success)
    {
      this.router.navigate([""]);     
    }     
  }

  onBackPressed()
  {
    this.router.navigateByUrl("");
  }
}
