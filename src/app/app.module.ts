import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IndexComponent } from './page/index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { SlideComponent } from './page/slide/slide.component';
import { AboutComponent } from './page/about/about.component';
import { BannerComponent } from './page/banner/banner.component';
import { NavigatorComponent } from './page/navigator/navigator.component';
import { NewComponent } from './page/new/new.component';
import { NewDetailComponent } from './page/new-detail/new-detail.component';
import { ServiceComponent } from './page/service/service.component';
import { ContactComponent } from './page/contact/contact.component';
import { ProductComponent } from './page/product/product.component';
import { CategoriesComponent } from './page/categories/categories.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { MagizoomComponent } from './page/magizoom/magizoom.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    SlideComponent,
    AboutComponent,
    BannerComponent,
    NavigatorComponent,
    NewComponent,
    NewDetailComponent,
    ServiceComponent,
    ContactComponent,
    ProductComponent,
    CategoriesComponent,
    ProductDetailComponent,
    MagizoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
