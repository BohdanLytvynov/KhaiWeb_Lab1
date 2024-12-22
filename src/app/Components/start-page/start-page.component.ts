import { Component, Inject, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { PostComponent } from "../post/post.component";
import { DataService } from '../../Services/Data/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Post } from '../../Interfaces/post';
import { AuthenticationService } from '../../Services/Auth/authentication.service';
import { EmptyUser, IUser } from '../../Interfaces/user';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AuthResult, IAuthResult, Operation } from '../../Interfaces/authresult';
import { UserComponent } from "../user/user/user.component";
import { GraphComponent } from "../graph/graph/graph.component";

export enum UserMenuItem
{
  MyProfile = 0,
  ViewStatistics
}

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [PostComponent, FormsModule, CommonModule, UserComponent, GraphComponent],
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css', '../start-page/start-page.mobile.css']
})
export class StartPageComponent implements OnInit, OnDestroy {

  user! : IUser;

  authorized! : boolean

  displayMenu : boolean = false

  dataService! : DataService

  searchResult : Post[] = []

  routerSubs! : Subscription

  selectedUserMenuItem! : UserMenuItem
    
  constructor(
  @Inject(DataService) private data : DataService,
  @Inject(AuthenticationService) private auth : AuthenticationService,
  private currentRoute : ActivatedRoute
  )
  {
    this.selectedUserMenuItem = UserMenuItem.MyProfile

    this.dataService = data;
     
    window.localStorage.setItem('loginResult', JSON.stringify(new AuthResult()))
  }
  ngOnDestroy(): void {
    this.routerSubs.unsubscribe()
  }

  ngOnInit(): void {
    this.routerSubs = this.currentRoute.data.subscribe(
      data => 
      {                                    
        this.user = this.auth.getCurrentUser();

        if(this.user != undefined && this.user.id >= 0)          
          this.authorized = true
        else
          this.authorized = false                  
      })      
  }

  onSearchButtonPressed(title: string)
  {
    this.searchResult = this.dataService.getPostsByTitle(title);
  }

  onClearPresed()
  {
    this.searchResult = [];    
  }

  onAvatarMouseOver()
  {
    this.displayMenu = true
  }

  onMenuBackPressed()
  {    
    this.displayMenu = false    
  }

  onLogout(param : boolean)
  {
    this.auth.logOut()
    this.authorized = false
    this.displayMenu = false
  }

  onViewStatisicsClick()
  {
    this.selectedUserMenuItem = UserMenuItem.ViewStatistics
  }

  onMyProfileClick()
  {
    this.selectedUserMenuItem = UserMenuItem.MyProfile
  }
}
