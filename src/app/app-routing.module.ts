import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeaShopHomeComponent} from './components/sites/frontend/tea-shop-home/tea-shop-home.component';

const routes: Routes = [
    {
        path: '',
        children: [],
        component: TeaShopHomeComponent,
        data: {title: 'Tea Shop Home'}
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
