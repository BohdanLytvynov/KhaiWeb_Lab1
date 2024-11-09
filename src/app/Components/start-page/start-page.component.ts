import { Component, Inject } from '@angular/core';
import { PostComponent } from "../post/post.component";
import { DataService } from '../../Services/Data/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Post } from '../../Interfaces/post';

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [PostComponent, FormsModule, CommonModule],
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css', '../start-page/start-page.mobile.css']
})
export class StartPageComponent {

  dataService! : DataService

  searchResult : Post[] = [];

  constructor(@Inject(DataService) private data : DataService)
  {
     this.dataService = data;
  }

  onSearchButtonPressed(title: string)
  {
    this.searchResult = this.dataService.getPostsByTitle(title);
  }

  onClearPresed()
  {
    this.searchResult = [];
  }
}
