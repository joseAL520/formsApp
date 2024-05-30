import { Component } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynami-page.component.html',
  styles: ``
})
export class DynamiPageComponent {


public myForm:FormGroup = this.form.group({
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


isValidField( field: string ): boolean | null {
  return this.myForm.controls[field].errors
    && this.myForm.controls[field].touched;
}


// validar en caso formulario  con arreglo
isValidFieldArray( formArray: FormArray, index: number){
  return formArray.controls[index].errors
         && formArray.controls[index].touched;
}

// VALIDA EL TIPO DE ERROR PARA ARROJAR EL MENSAJE
getFieldError( field: string ): string | null {

  if ( !this.myForm.controls[field] ) return null;

  const errors = this.myForm.controls[field].errors || {};

  for (const key of Object.keys(errors) ) {
    switch( key ) {
      case 'required':
        return 'Este campo es requerido';

      case 'minlength':
        return `Mínimo ${ errors['minlength'].requiredLength } caracters.`;
    }
  }

  return null;
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
