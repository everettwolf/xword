import {Component, Input} from '@angular/core';
import {Square} from "../xword/square";


@Component({
    selector: 'keyboard',
    templateUrl: 'app/components/keyboard/keyboard.html',
    styleUrls: ['app/components/keyboard/keyboard.css']
})
export class KeyboardComponent {

    @Input()
    square:Square;


    qwerty:string[];

    constructor() {
        this.qwerty = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
    }

    type(key:string) {

    }

}