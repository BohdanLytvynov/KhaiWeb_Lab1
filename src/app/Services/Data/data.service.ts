import { Injectable } from '@angular/core';
import { Post } from '../../Interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private posts : Post[] = [];

  constructor() { 
    //Init data
    this.posts.unshift({ id: 1, title:"Kif, I have mated with a woman. Inform the men.", 
      text:"I am the man with no name, Zapp Brannigan! Who's brave enough to fly" +
"into something we all keep calling a death sphere? Meh. And until then, I can" +
"never die?"  });
    this.posts.unshift({ id: 2, title:"Kids don't turn rotten just from watching TV.", 
      text:"Oh yeah, good luck with that. I haven't felt much of anything since"+
"my guinea pig died. I'll tell them you went down prying the wedding ring off"+
"his cold, dead finger. Now, now. Perfectly symmetrical violence never solved"+
"anything."});
this.posts.unshift({ id: 3, title:"Kif, I have mated with a woman. Inform the men.", 
  text:"I am the man with no name, Zapp Brannigan! Who's brave enough to fly" +
"into something we all keep calling a death sphere? Meh. And until then, I can" +
"never die?"  });
this.posts.unshift({ id: 4, title:"Kids don't turn rotten just from watching TV.", 
      text:"Oh yeah, good luck with that. I haven't felt much of anything since"+
"my guinea pig died. I'll tell them you went down prying the wedding ring off"+
"his cold, dead finger. Now, now. Perfectly symmetrical violence never solved"+
"anything."  });
  }

  getPosts() : Post[]
  {
    return this.posts;
  }

  getMostPopularPosts(count : number = 2) : Post[]
  {
    let posts : Post[] = [];
    let i : number = 0;
    
    while(i < count)
    {
      posts.unshift(this.posts[i]);
      i++;
    }

    return posts;
  }

  getPostsByTitle(title : string) : Post[]
  {
    return this.posts.filter(x => x.title.includes(title));
  }
}
