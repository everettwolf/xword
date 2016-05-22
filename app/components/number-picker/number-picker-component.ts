import { Component, Input } from '@angular/core';

import {PickerNumber} from './picker-number';
import {PickerMax} from "./picker-number";
import {PickerMin} from "./picker-number";

@Component({
    selector: 'number-picker',
    templateUrl: 'app/components/number-picker/number-picker.html',
    styleUrls: ['app/components/number-picker/number-picker.css']
})
export class NumberPickerComponent {

    @Input()
    number:PickerNumber;
    @Input()
    max:PickerMax;
    @Input()
    min:PickerMin;

    errorMessage:string;

    constructor() {
        if(!this.number) {
            this.number = {"value": 0};
        }
    }

    increment():void {
        if (!!this.number && !!this.max && this.number.value >= this.max.value) {
            this.showError("Max", this.max);
            return;
        }
        this.number.value++;
    }

    decrement():void {
        if (!!this.number && !!this.min && this.number.value <= this.min.value) {
            this.showError("Min", this.min);
            return;
        }
        this.number.value--;
    }

    showError(msg:string, type:any):void {
        this.errorMessage = msg + " is " + type.value;
        setTimeout(() => {
            this.errorMessage = null;
        }, 3000)
    }

}