import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {


  public myForm:FormGroup = this.form.group({
      name:      ['',[Validators.required]],
      email:     ['',[Validators.required, ]],
      username:  ['',[Validators.required]],
      password:  ['',[Validators.required, Validators.minLength(6)]],
      password2: ['',[Validators.required]]

  })

  constructor(
    private form: FormBuilder, 
  ){

  }



  isValidField( field: string ): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }
 
  onSave(){
    
    if(this.myForm.invalid){
      console.log(this.myForm.value);1
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset()
}


}
