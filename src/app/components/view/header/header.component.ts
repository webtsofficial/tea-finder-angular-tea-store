import {
    Component,
    OnInit
} from '@angular/core';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import {faFilter} from '@fortawesome/free-solid-svg-icons/faFilter';
import {faNewspaper} from '@fortawesome/free-solid-svg-icons/faNewspaper';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    faHome = faHome;
    faShopping = faShoppingCart;
    faFilter = faFilter;
    faNews = faNewspaper;
    menuOpen = false;

    constructor() {
    }

    ngOnInit() {
    }

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }

}
