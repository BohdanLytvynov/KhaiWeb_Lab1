import { Component } from '@angular/core';
import { Post } from '../../Interfaces/post';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})

export class PostComponent {

  post : Post = {
    id: 1,
    title : 'Kif, I have mated with a woman. Inform the men.',
    text : 'I am the man with no name, Zapp Brannigan! Who\'s brave enough to fly' +
'into something we all keep calling a death sphere? Meh. And until then, I can' +
'never die? Maybe I love you so much I love you no matter who you are pretending' +
'to be.'
  }

  

constructor()
{  
  
}

}
