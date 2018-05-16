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
import { TeafinderSummarizeComponent } from './components/view/tea-shop-home/teafinder-summarize/teafinder-summarize.component';
import { OffersCarouselComponent } from './components/general/carousels/offers-carousel/offers-carousel.component';
import { IntroCarouselComponent } from './components/general/carousels/intro-carousel/intro-carousel.component';
import { TeaOverviewCardComponent } from './components/general/cards/tea-overview-card/tea-overview-card.component';
import { FilterOfferTeasPipe } from './pipes/Teas/filter-offer-teas/filter-offer-teas.pipe';
import { FilterTeasByMinPricePipe } from './pipes/Teas/filter-teas-by-min-price/filter-teas-by-min-price.pipe';
import { FilterTeasByMaxPricePipe } from './pipes/Teas/filter-teas-by-max-price/filter-teas-by-max-price.pipe';
import { FilterTeasBySortPipe } from './pipes/Teas/filter-teas-by-sort/filter-teas-by-sort.pipe';
import { FilterTeasByCharacteristicsPipe } from './pipes/Teas/filter-teas-by-characteristics/filter-teas-by-characteristics.pipe';
import { FilterTeasByAromasPipe } from './pipes/Teas/filter-teas-by-aromas/filter-teas-by-aromas.pipe';
import { FilterTeasByTastesPipe } from './pipes/Teas/filter-teas-by-tastes/filter-teas-by-tastes.pipe';
import { FilterTeasByGrowingRegionPipe } from './pipes/Teas/filter-teas-by-growing-region/filter-teas-by-growing-region.pipe';
import { FilterTeasByNamePipe } from './pipes/Teas/filter-teas-by-name/filter-teas-by-name.pipe';
import {
    HashLocationStrategy,
    LocationStrategy
} from '@angular/common';
import {TeaService} from './services/teas/tea/tea.service';
import {TeaSortService} from './services/teas/tea-sort/tea-sort.service';
import {TeaImageService} from './services/teas/tea-image/tea-image.service';
import {TeaCharacteristicService} from './services/teas/tea-characteristic/tea-characteristic.service';
import {TeaAromaService} from './services/teas/tea-aroma/tea-aroma.service';
import {TeaTastesService} from './services/teas/tea-tastes/tea-tastes.service';
import {Globals} from './globals/Globals';


@NgModule({
    declarations: [
        AppComponent,
        TeaShopHomeComponent,
        HeaderComponent,
        FooterComponent,
        TeafinderSummarizeComponent,
        OffersCarouselComponent,
        IntroCarouselComponent,
        TeaOverviewCardComponent,
        FilterOfferTeasPipe,
        FilterTeasByMinPricePipe,
        FilterTeasByMaxPricePipe,
        FilterTeasBySortPipe,
        FilterTeasByCharacteristicsPipe,
        FilterTeasByAromasPipe,
        FilterTeasByTastesPipe,
        FilterTeasByGrowingRegionPipe,
        FilterTeasByNamePipe
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
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        TeaService,
        TeaSortService,
        TeaImageService,
        TeaCharacteristicService,
        TeaAromaService,
        TeaTastesService,
        Globals
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
