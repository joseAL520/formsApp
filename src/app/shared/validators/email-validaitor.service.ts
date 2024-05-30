import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidatorService implements AsyncValidator {
    
    
    validate(control: AbstractControl):  Observable<ValidationErrors | null> {
        
        const email = control.value;
        console.log('email',email);
        return of(
            {
                emailTake:true
            }
        ).pipe(
            delay( 2000 )
        )

    }

    // // esto es opcional 
    // registerOnValidatorChange?(fn: () => void): void {
    //     throw new Error('Method not implemented.');
    // }

    
    

}