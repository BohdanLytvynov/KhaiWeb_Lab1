import { Component } from '@angular/core';
import { FeedBack } from '../../Interfaces/feedback';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  feedBack : FeedBack = { id: -1, firstname: '', lastname: '', age: 0, 
    gender: '', like: 0, feedback: '', emailBack: false
   };   
  showAddGenderInfo : boolean = false;
  gender : any;

  constructor()
  {

  }

  //Functions

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
}
