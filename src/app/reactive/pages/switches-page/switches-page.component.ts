import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: ``
})
export class SwitchesPageComponent {

  public myForm: FormGroup = this.form.group({
    gender: ['M', Validators.required],
    wantNotfications: [true, Validators.required],
    temsAndConditions: [false, Validators.requiredTrue],
  });


  constructor(
    private form: FormBuilder,
  ){}


  isValidField( field: string ): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }


  onSave(){
      if(this.myForm.invalid){
        this.myForm.markAllAsTouched();
        return;
      }

      console.log(this.myForm.value);
  }

}
