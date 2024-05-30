import { FormControl, ValidationErrors } from "@angular/forms";

// esto es una forma de ayudar el proyecto
// sin sobrecargar el codigo o estar copiando  pegando
// un formato helper 
/// se puuede usar en varias paartes del proyecto 


//    estos son expresiones regulares 
export const firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const cantBeSrider = ( controls: FormControl): ValidationErrors | null  =>{

    const value: string = controls.value.trim().toLowerCase();

    if( value === 'strider'){
        return {
            noStrider: true,
        }
    }

   return null;

}