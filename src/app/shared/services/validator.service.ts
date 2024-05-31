import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { notEqual } from 'assert';

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



        
    public ifFieldOneEquaFieldTwo(field:string, field2: string){
        

        return (formGroup: AbstractControl): ValidationErrors | null =>{

            const fieldValu1 = formGroup.get(field)?.value;
            const fieldValu2 = formGroup.get(field2)?.value;

            if(fieldValu1 !== fieldValu2){
                formGroup.get(fieldValu2)?.setErrors({ notEqual: true});
                return{ notEqual: true}
            }

            formGroup.get(fieldValu2)?.setErrors( null);

            return null;
        }


    }
}