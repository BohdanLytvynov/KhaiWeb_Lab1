import { Component, Inject } from '@angular/core';
import { DataService } from '../../../Services/Data/data.service';
import { FormsModule } from '@angular/forms';
import { Post } from '../../../Interfaces/post';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {

  title : string = ''
  text : string = ''
  category : string = ''
  language : string = ''
  visible : boolean = false

  constructor(
    @Inject(DataService) private dataService : DataService
  )
  {

  }

  onPublishPressed()
  {
    let maxId = this.dataService.getMaxId()
    if(maxId != undefined)
    {
      let post : Post = { 
        id: maxId,
        title: this.title, 
        text: this.text, 
        category: this.category,
        language: this.language,
        visibleOnSite: this.visible
      }

      console.log(post)

      this.dataService.addPost(post)
    }
    
  }
}
