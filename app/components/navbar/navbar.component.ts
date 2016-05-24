import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'xword-navbar',
    templateUrl: 'app/components/navbar/navbar.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES]
})
export class NavbarComponent {
    @Input() brand: string;
    @Input() routes: any[];
}
