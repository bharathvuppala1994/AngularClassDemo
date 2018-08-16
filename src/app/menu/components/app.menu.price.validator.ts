
import { Validator, ValidatorFn, FormControl, NG_VALIDATORS, AbstractControl } from "@angular/forms";
import { Directive } from "@angular/core";

@Directive({
    selector:'[mypricevalidator]',
    providers:[{
        provide: NG_VALIDATORS,
        multi: true,
        useExisting: PriceValidator
    }]
})

export class PriceValidator implements Validator{
    validate(control : AbstractControl) : {[key: string] : boolean} {
        console.log("Price : " , control.value)
        let priceValue = control.value;
        if(priceValue <= 5) {
            return {'invalidPrice' : true}
        } else{
            return null;
        }
    }
}