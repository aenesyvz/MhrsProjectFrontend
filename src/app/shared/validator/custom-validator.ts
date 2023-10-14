import { AbstractControl, ValidationErrors, } from "@angular/forms";

export class CustomValidators {
    static numericValidator(control: AbstractControl): ValidationErrors | null {
        if (control.value !== null && isNaN(control.value)) {
            return { numericValidator: true }
        }
        return null;
    }
}