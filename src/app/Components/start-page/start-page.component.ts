import { Component, Inject } from '@angular/core';
import { PostComponent } from "../post/post.component";
import { DataService } from '../../Services/Data/data.service';
import { Data } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [PostComponent, FormsModule, CommonModule],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.css'
})
export class StartPageComponent {

  dataService! : DataService

  constructor(@Inject(DataService) private data : DataService)
  {
     this.dataService = data;
  }
}
