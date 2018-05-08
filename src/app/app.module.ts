// Modules
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

// Components
import {AppComponent} from './app.component';
import {TeaShopHomeComponent} from './components/sites/frontend/tea-shop-home/tea-shop-home.component';
import {HeaderComponent} from './components/view/header/header.component';
import {FooterComponent} from './components/view/footer/footer.component';
import {NguCarouselModule} from '@ngu/carousel';
import { TeafinderSummarizeComponent } from './components/views/tea-shop-home/teafinder-summarize/teafinder-summarize.component';


@NgModule({
    declarations: [
        AppComponent,
        TeaShopHomeComponent,
        HeaderComponent,
        FooterComponent,
        TeafinderSummarizeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        FontAwesomeModule,
        HttpClientModule,
        NguCarouselModule
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
