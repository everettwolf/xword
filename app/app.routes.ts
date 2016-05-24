import {XwordComponent} from './components/xword/xword.component';
import {KeyboardComponent} from './components/keyboard/keyboard.component';


export var APP_ROUTES: any[] = [
    { path: '/', name: 'Home', component: XwordComponent },
    { path: '/keyboard', name: 'Keyboard', component: KeyboardComponent }
];
