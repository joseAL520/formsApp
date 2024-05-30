import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({providedIn: 'root'})


export class ValidatorService {

    public  firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
    public  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

    
    public cantBeSrider = ( controls: FormControl ): ValidationErrors | null  =>{

        const value: string = controls.value.trim().toLowerCase();
    
        if( value === 'strider'){
            return {
                noStrider: true,
            }
        }
    
       return null;
    
    }



    public isValiField( form: FormGroup, field:string ){
        return form.controls[field].errors
        && form.controls[field].touched;
    }

}