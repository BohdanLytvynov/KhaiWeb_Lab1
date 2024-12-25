import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Post } from '../../Interfaces/post';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})

export class PostComponent{

  @Input("post")
  post! : Post

constructor()
{  
  
}
  
}
