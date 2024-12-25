import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  Name_textField : RegExp = /([A-Z]{1}[a-z]{0,}[^0-9]{0,}\s{0,})/;  
  sequence : RegExp = new RegExp(/[A-Z]{0,}[a-z,][^\s]{0,}/g); 
  number : RegExp = /([\d]{4,})/;
  email : RegExp = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)

  ValidateEmail(value : string, out?: (err : string) => void) : boolean
  {
    if(!this.validateTextNotEmpty(value))
    {
      if(out != undefined)
        out('Field is Empty!')
      return false;
    }

    if(!this.email.test(value))
    {
      if(out != undefined)
        out('Incorrect Email format!')
      return false
    }
   
    return true;
  }

  ValidateText(value: string, out?: (err : string) => void) : boolean
  {
    if(!this.validateTextNotEmpty(value))
    {
      if(out != undefined)
        out('Field is Empty!')
        return false;
    }

    if(!this.Name_textField.test(value))
    {
      if(out != undefined)
        out('Incorrect input!')
        return false
    }

    return true;
  }

  private validateTextNotEmpty(value : string)
  {
    return value.length > 0;
  }  

  ValidateTextNotEmpty(value : string, out? : (err : string) => void)
  {
    if(!this.validateTextNotEmpty(value))
    {
      if(out != undefined)
        out('Field is Empty!')
      return false
    }
    
    return true
  } 
  
  ValidateNumber(value : string, out?: (err : string) => void) : boolean
  {
    if(!this.validateTextNotEmpty(value))
    {
      if(out != undefined)
        out('Field is Empty!')
      return false;
    }

    if(Number.isNaN(Number(value)))
    {
      if(out != undefined)
        out('Incorrect Input!')
      return false
    }

    return true
  }
    
}
