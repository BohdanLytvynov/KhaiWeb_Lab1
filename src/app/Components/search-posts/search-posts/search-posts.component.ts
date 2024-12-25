import { Component, Inject, INJECTOR } from '@angular/core';
import { DataService } from '../../../Services/Data/data.service';
import { Post } from '../../../Interfaces/post';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-posts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-posts.component.html',
  styleUrl: './search-posts.component.css'
})
export class SearchPostsComponent {

  columnSelected : string = '1'
  orderSelected : string = '1'

  searchResult : Post[] = []

  displaySearchResults : boolean = false

  constructor(
    @Inject(DataService) private dataService : DataService
  )
  {

  }

  onSearchButtonPressed(title: string)
  {
    if(title != '')
    this.searchResult = this.dataService.getPostsByTitle(title);
    if(this.searchResult.length > 0)
      this.displaySearchResults = true
  }

  onClearPresed()
  {
    this.searchResult = [];   
    this.displaySearchResults = false
  }

  onColumnSelected(value : string)
  {
    this.columnSelected = value
    console.log(this.columnSelected)
  }

  onOrderSelected(value : string)
  {
    this.orderSelected = value
    console.log(this.orderSelected)
  }

  onSortButtonPressed()
  {
    switch(this.columnSelected)
    {
      case '1'://id
        
        if(this.orderSelected === '1')//ascendence
        {
          this.searchResult = this.searchResult.sort((a, b) => {
            if(a.id < b.id)
              return -1
            if(a.id == b.id)
              return 0
            else
              return 1
          });
        }
        else if(this.orderSelected === '2')//descendence
        {
          this.searchResult = this.searchResult.sort((a, b) => {
            if(a.id < b.id)
              return -1
            if(a.id == b.id)
              return 0
            else
              return 1
          }).reverse();
        }
        break
      case '2'://title
        if(this.orderSelected === '1')
          {
            this.searchResult = this.searchResult.sort((a, b) => {
              return a.title.localeCompare(b.title)
            });
          }
          else if(this.orderSelected === '2')
          {
            this.searchResult = this.searchResult.sort((a, b) => {
              return a.title.localeCompare(b.title)
            }).reverse();
          }
        break
      case '3'://created date
        if(this.orderSelected === '1')
          {
            this.searchResult = this.searchResult.sort((a, b) => {
              if(a.createdDate < b.createdDate)
                return -1
              if(a.id == b.id)
                return 0
              else
                return 1
            });
          }
          else if(this.orderSelected === '2')
          {
            this.searchResult = this.searchResult.sort((a, b) => {
              if(a.createdDate < b.createdDate)
                return -1
              if(a.id == b.id)
                return 0
              else
                return 1
            }).reverse();
          }
        break
    }
  }

}
