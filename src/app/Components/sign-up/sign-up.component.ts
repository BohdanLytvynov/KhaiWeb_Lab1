import { CommonModule } from '@angular/common';
import { Component, ElementRef, Inject, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Validator } from '../../Interfaces/validator/ValidatorBase';
import { AuthenticationService } from '../../Services/Auth/authentication.service';
import { AuthResult } from '../../Interfaces/authresult';
import { IUser, User, UserRole } from '../../Interfaces/user';
import { ValidationService } from '../../Services/Validation/validation.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  @ViewChild('loginRef', {static: false})
  loginRef! : ElementRef<HTMLElement>

  @ViewChild('emailRef', {static: false})
  emailRef! : ElementRef<HTMLElement>

  @ViewChild('firstnameRef', {static: false})
  firstnameRef! : ElementRef<HTMLElement>

  @ViewChild('lastnameRef', {static: false})
  lastnameRef! : ElementRef<HTMLElement>

  @ViewChild('pass1Ref', { static:false })
  pass1Ref! : ElementRef<HTMLElement>

  @ViewChild('pass2Ref', {static: false})
  pass2Ref! : ElementRef<HTMLElement>

  result : AuthResult = new AuthResult()

  login : string = '';
  firstname : string = '';
  lastname : string = '';
  email : string = ''
  pass1 : string = '';
  pass2 : string = '';

  emailErrmsg : string = 'Please enter email!'
  pass2Errmsg : string = 'Please repeat the password!'
  firstnameErrMsg : string = ''
  lastnameErrMsg : string = ''  

  validation : Validator

  canRegisterBePressed : boolean = false

   //Functions

  constructor(private router : Router,
    @Inject(AuthenticationService) private auth : AuthenticationService,
    @Inject(ValidationService) private validService : ValidationService
  )
  {
    this.validation = new Validator(6)
  }

  onEmailChanged(value : string)
  {    
    
    this.validation.SetValidArrayItem(1, 
      this.validService.ValidateEmail(value, (err) => { this.emailErrmsg = err })
    )   
    this.canRegisterButtonBePressed()             
  }

  onLoginChanged(value : string)
  {
    this.validation.SetValidArrayItem(0, this.validService.ValidateTextNotEmpty(value))
    this.canRegisterButtonBePressed()    
  }

  onFirstNameChanged(value : string)
  {
    this.validation.SetValidArrayItem(2, 
      this.validService.ValidateText(value, err => { this.firstnameErrMsg = err })
    )
    this.canRegisterButtonBePressed()
  }

  onLastNameChanged(value : string)
  {
    this.validation.SetValidArrayItem(3, 
      this.validService.ValidateText(value, err => { this.lastnameErrMsg = err })
    )
    this.canRegisterButtonBePressed()
  }

  onPass1Changed(value : string)
  {
    this.validation.SetValidArrayItem(4, this.validService.ValidateTextNotEmpty(value))
    this.canRegisterButtonBePressed()  
  }

  onPass2Changed(value : string)
  {
      if(!this.validService.ValidateTextNotEmpty(value, err => { this.pass2Errmsg = err }))        
        this.validation.SetValidArrayItem(5, false)      
      else if(this.pass1 !== value)
      {
        this.pass2Errmsg = 'Password mismatch!'
        this.validation.SetValidArrayItem(5, false)
      }
      else      
        this.validation.SetValidArrayItem(5, true) 

      this.canRegisterButtonBePressed()  
  }

  canRegisterButtonBePressed()
  {
    this.canRegisterBePressed = this.validation.CheckValidArray(0, 5)  
    this.validation.sowValidArra()
  }

  onSignIn()
  {
    if(!this.canRegisterBePressed) return

    let user : IUser = new User(
      -1, this.login, this.pass1, this.firstname, 
      this.lastname, this.email, UserRole.User
    );
    
    this.result = this.auth.signUp(user)        
  }

  onBackPressed()
  {
    this.router.navigateByUrl("");
  }  
}
