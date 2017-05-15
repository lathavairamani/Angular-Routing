import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './user/auth-guard.service';
import { SelectiveStrategy } from './selective-strategy.service';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
    imports: [
      RouterModule.forRoot([
        { path: 'welcome', component: WelcomeComponent },
        { path: 'products', loadChildren: 'app/products/product.module#ProductModule', data: { preload: true }, canActivate: [ AuthGuard ]},
        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        { path: '**', component: PageNotFoundComponent }
      ], { enableTracing: true, preloadingStrategy: SelectiveStrategy })
    ],
    providers: [ SelectiveStrategy ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
