import { FormControl } from "@angular/forms";

export class InputControl {
    onInputChangeUppercase(event: Event, control: FormControl): void {
        const inputElement = event.target as HTMLInputElement;
        const upperCaseValue = inputElement.value.toUpperCase();
        control.setValue(upperCaseValue); // FormControl'u güncelle
    }

    onInputChangeAcceptLimitedNumeric(event: Event, control: FormControl): void {
        const inputElement = event.target as HTMLInputElement;
        const numericValue = inputElement.value.replace(/[^0-9]/g, '');
        // İlk 11 karakteri alın
        const trimmedValue = numericValue.substring(0, 11);
        control.setValue(trimmedValue); // FormControl'u güncelle
    }


    onInputPhoneNumberChange(event: Event, control: FormControl): void {

    }

}