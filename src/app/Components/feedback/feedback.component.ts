import { Component, Inject } from '@angular/core';
import { FeedBack } from '../../Interfaces/feedback';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  feedBack : FeedBack = { id: -1, firstname: '', lastname: '', age: 0, 
    gender: '', like: '', feedback: '', emailBack: false
   };   
  showAddGenderInfo : boolean = false;
  gender : any;

  
  constructor(private router : Router)
  {

  }

  //Functions

  likeChanged(value : string)
  {
    this.feedBack.like = value;
  }

  genderSelected(value : string)
  {
    console.log(this.gender);

    if(value === "3")
    {
      this.showAddGenderInfo = true;
    }
    else
    {
      this.showAddGenderInfo = false;
    }    
  }

  onSendClick()
  {

  }

  onClearClick()
  {

  }

  onBackClick()
  {
    this.router.navigateByUrl("")
  }
}
