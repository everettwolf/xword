import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {APP_ROUTES} from './app.routes';
import {NavbarComponent} from './components/navbar/navbar.component';

@Component({
    selector: 'xword-main-app',
    templateUrl: 'app/app.html',
    directives: [NavbarComponent, ROUTER_DIRECTIVES]
})
@Routes(APP_ROUTES)
export class AppComponent {
    public appRoutes: any[];

    constructor() {
        this.appRoutes = APP_ROUTES;
    }
}
