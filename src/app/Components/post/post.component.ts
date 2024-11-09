import { Component, Input } from '@angular/core';
import { Post } from '../../Interfaces/post';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})

export class PostComponent {

  @Input("post")
  post! : Post
  
constructor()
{  
  
}

}
