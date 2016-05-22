import {Component} from '@angular/core';

import {Square} from './square';
import {NumberPickerComponent} from "../number-picker/number-picker-component";
import {KeyboardComponent} from "../keyboard/keyboard-component";
import {PickerNumber} from "../number-picker/picker-number";
import {PickerMax} from "../number-picker/picker-number";
import {PickerMin} from "../number-picker/picker-number";

@Component({
    selector: 'xword-app',
    templateUrl: 'app/components/xword/xword.html',
    styleUrls: ['app/components/xword/xword.css'],
    directives: [NumberPickerComponent, KeyboardComponent]
})
export class AppComponent {
    size:PickerNumber;
    maxGridSize:PickerMax;
    minGridSize:PickerMin;
    grid:number[] = [];
    selectedSquare:Square;
    showKeyboard:boolean;

    constructor() {
        this.size = {"value": 15};
        this.maxGridSize = {"value": 17};
        this.minGridSize = {"value": 5};
        this.grid = [];
        this.resizeGrid();
    }

    setSelectedCell(row:number, col:number) {
        this.selectedSquare = {"row": row, "col": col};
    }

    isSelected(row:any, col:any) {
        return !!this.selectedSquare ? this.selectedSquare.row === row && this.selectedSquare.col === col : false;
    }

    resizeGrid() {
        this.grid = [];
        for (var i = 1; i <= this.size.value; i++) {
            this.grid.push(i);
        }
    }
}