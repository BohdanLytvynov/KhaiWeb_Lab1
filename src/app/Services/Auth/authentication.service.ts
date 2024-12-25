import { Injectable } from '@angular/core';
import { EmptyUser, IUser, User, UserRole } from '../../Interfaces/user';
import { AuthResult, IAuthResult, Operation } from '../../Interfaces/authresult';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  users! : IUser[];

  constructor() 
  {
    this.users = [];
    this.users.unshift(new User(1, 'admin', "12345", "Admin", "AdminSurename", "some@email.com", UserRole.Admin));
    this.users.unshift(new User(2, 'user', "user", "User", "UserSurename", "user@email.com", UserRole.User));
  }

  getCurrentUser(): User
  { return JSON.parse(window.localStorage.getItem('user') || '{}') as User; }

  logOut()
  {
    let u = JSON.parse(window.localStorage.getItem('user') || '{}') as User;

    if(u != undefined)
    {
      window.localStorage.setItem('user', JSON.stringify(new EmptyUser()));         
    }
      
  }

  login(login : string, password : string) : IAuthResult
  {
    let user = this.users.find(x => x.login === login && x.password === password);
    
    if(user != undefined)
    {
      window.localStorage.setItem('user', JSON.stringify(user));     
      return new AuthResult(Operation.Login);
    }
    else
      return new AuthResult(Operation.Login, "Incorrect login and/or password!");      
  }

  signUp(user : IUser) : IAuthResult
  {
    let result : IAuthResult;

    let er! : Error;

    try {
      if(user == undefined)
        throw new Error("User is undefined!");

      if(this.users.find(x => x.login === user.login))
        throw new Error(`User with login ${user.login} already exists!`);
      
      if(this.users.find(x => x.email === user.email))
        throw new Error(`Email: ${user.email} already exists!`);

      user.id = this.users.at(0)?.id ?? -1 

      this.users.unshift(user);
    } 
    catch (error) 
    {
      er = (error as Error);
    }
        
    result = new AuthResult(Operation.SignUp, er.message);

    return result;
  }
}
