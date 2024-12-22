import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmptyUser, IUser } from '../../../Interfaces/user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input('user')
  user : IUser = new EmptyUser()

  @Output()
  LogOutClicked : EventEmitter<boolean> = new EventEmitter<boolean>();

  onLogOutClick()
  {
    this.LogOutClicked.emit(true);
  }
}
