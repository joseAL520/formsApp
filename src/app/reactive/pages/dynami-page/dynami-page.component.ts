import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynami-page.component.html',
  styles: ``
})
export class DynamiPageComponent {


public myForm = this.form.group({
    name:['',[ Validators.required, Validators.minLength(3) ]],
    // esto ayuda si en caso dado se tiene un arreglo en el formulario
  
    favoriteGame: this.form.array([
      // puedes tener campos  opcional

      ['Metal Gear',Validators.required],
      ['Death Stranding',Validators.required]
    ])
});

constructor (private form: FormBuilder){}


get favoriteGames(){
  return this.myForm.get('favoriteGame') as FormArray;
}


onSubmit(){

  if( this.myForm.invalid ) {
    this.myForm.markAllAsTouched();
    return;
  }
  console.log(this.myForm.value);
  this.myForm.reset();
}

}
