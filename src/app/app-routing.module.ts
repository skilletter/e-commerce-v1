import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponent } from './page/index/index.component';
import { AboutComponent } from './page/about/about.component';
import { NewComponent } from './page/new/new.component';
import { NewDetailComponent } from './page/new-detail/new-detail.component';
import { ServiceComponent } from './page/service/service.component';
import { ContactComponent } from './page/contact/contact.component';
import { ProductComponent } from './page/product/product.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';

const routes: Routes = [
    // { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },
    // { path: 'page', loadChildren: './page/laout/laout.module#LaoutModule'},
    // { path: 'login', loadChildren: './login/login.module#LoginModule' },
    // { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    // { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    // { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    // { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' },
    { path: 'index', component: IndexComponent },
    { path: 'about', component: AboutComponent },
    { path: 'product', component: ProductComponent },
    { path: 'product-detail', component: ProductDetailComponent },
    { path: 'new', component: NewComponent },
    { path: 'new-detail', component: NewDetailComponent },
    { path: 'service', component: ServiceComponent },
    { path: 'contact', component: ContactComponent }
];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
