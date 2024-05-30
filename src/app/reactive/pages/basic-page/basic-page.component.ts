import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent  implements OnInit {

  //TODO: forma 1 
  // public myForm: FormGroup = new FormGroup({
  //     name: new FormControl(''),
  //     price: new FormControl(0,),
  //     inStoraje: new FormControl(0),
  // })


  //TODO: forma 2
  public myForm:FormGroup = this.fb.group({
    name:['',[Validators.required, Validators.minLength(3)]] ,
    price: [0, [Validators.required, Validators.minLength(0), Validators.min(0)]],
    inStoraje: [0,[Validators.required, Validators.minLength(0),Validators.min(0)]],
  })


  public rtx  = {
    name:'rtx',
    price:10,
    inStoraje:20,
  }

  constructor (private fb: FormBuilder){}
 
 
  isValidField( field:string, typeError:string){
     return this.myForm.controls[field].getError(typeError) && this.myForm.controls[field].touched
  }
  


  onSave():void{
    // esta forma ayuda a dispara nuestras validaciones
    if(this.myForm.invalid) {

      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value)

    // receter el formulario 
    // nota: puedes dejar valores por defecto
    this.myForm.reset()
  }

  ngOnInit(): void {
    this.myForm.reset( this.rtx )
  }



}
