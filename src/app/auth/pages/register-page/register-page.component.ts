import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import * as custonValidator from '../../../shared/validators/validataros.helpers';
import { ValidatorService } from '../../../shared/services/validator.service';
import { EmailValidatorService } from '../../../shared/validators/email-validaitor.service';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {


  public myForm:FormGroup = this.form.group({
      name:      ['',[Validators.required ,Validators.pattern( this.validatorService.firstNameAndLastnamePattern ) ]],
      email:     ['',[Validators.required, Validators.pattern( this.validatorService.emailPattern ) ], [this.EmailValidatorService]   ],
      username:  ['',[Validators.required, this.validatorService.cantBeSrider ]],
      password:  ['',[Validators.required, Validators.minLength(6)]],
      password2: ['',[Validators.required]]

  })

  constructor(
    private form: FormBuilder, 
    private validatorService: ValidatorService,
    private EmailValidatorService: EmailValidatorService
  ){

  }



  isValidField( field: string ) {
      return this.validatorService.isValiField( this.myForm , field);
  }
 
  onSave(){
    
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset()
}


}
