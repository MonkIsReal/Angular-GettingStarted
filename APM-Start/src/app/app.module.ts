import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule  } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list-component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {CustomPipe} from './shared/custom.pipe';
import {StarComponent} from './shared/star-component';
import {WelcomeComponent} from './home/welcome.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail.component';
import { Routes, RouterModule } from '@angular/router';
import {ProductDetailGuard} from './products/product-detail.guard';
import { from } from 'rxjs';


registerLocaleData(localeFr, 'fr');

const appRoutes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', canActivate: [ProductDetailGuard ], component: ProductDetailComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: WelcomeComponent },  // Wildcard route for a 404 page
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CustomPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
