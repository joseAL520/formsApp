import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent  {

  //TODO: forma 1 
  // public myForm: FormGroup = new FormGroup({
  //     name: new FormControl(''),
  //     price: new FormControl(0,),
  //     inStoraje: new FormControl(0),
  // })


  //TODO: forma 2
  public myForm:FormGroup = this.fb.group({
    name:['',[Validators.required, Validators.minLength(3)]] ,
    price: [0, [Validators.required, Validators.minLength(0)]],
    inStoraje: [0,[Validators.required, Validators.minLength(0)]],
  })


  constructor (private fb: FormBuilder){}

 
  


  onSave():void{
    if(this.myForm.invalid) return;
    console.log(this.myForm.value)

    
  }




}
