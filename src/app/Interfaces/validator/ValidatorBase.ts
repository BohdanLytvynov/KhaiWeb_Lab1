import { ElementRef } from "@angular/core";

export abstract class ValidatorBase
{
    private intitialized : boolean = false

    private validArray : boolean[] = [];

    constructor(count : number)
    {
        this.Init(count)
    }

    Init(count : number)
    {
        if(!this.intitialized)
        {
            this.validArray = Array(count).fill(false); 
            this.intitialized = true
        }            
    }

    ResetValidArray()
    {
        this.validArray.fill(false);
    }

    sowValidArra()
    {
        for(let i = 0; i <= this.validArray.length; i++)
        {
            console.log(this.validArray[i])
        }

    }
    
    CheckValidArray(start : number, end : number) : boolean
    {
        for(let i = start; i <= end; i++)
            if(!this.validArray[i]) return false;
        return true;  
    }

    GetValidArrayItem(index : number) : boolean | undefined
    {           
        return this.validArray.at(index)
    }

    SetValidArrayItem(index : number, value : boolean)
    {
        this.validArray[index] = value
    }

    enableElement(value : boolean, submit : ElementRef)
    {    
        if(submit == undefined)
            throw new Error('Parameter submit was undefined!')

        submit.nativeElement.disabled = !value;
    }
}

export class Validator extends ValidatorBase
{
    constructor(count : number)
    {
        super(count)
    }
}