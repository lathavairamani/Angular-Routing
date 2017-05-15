import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit.component';

import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';
import { ProductResolver } from './product-resolver.service';
import { ProductEditInfoComponent } from './product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit-tags.component';
import { ProductGuard } from './product-guard.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: ProductListComponent },
      { path: ':id', component: ProductDetailComponent, resolve: { product: ProductResolver } } ,
      { path: ':id/edit', component: ProductEditComponent, resolve: { product: ProductResolver },
        canDeactivate: [ ProductGuard ],
        children: [
          { path: '', redirectTo: 'info', pathMatch: 'full' },
          { path: 'info', component: ProductEditInfoComponent },
          { path: 'tags', component: ProductEditTagsComponent }
        ] }
      /* Another way of using resolver { product : 'productProvider' }*/
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductFilterPipe,
    ProductEditInfoComponent,
    ProductEditTagsComponent
  ],
  providers: [
    ProductService,
    ProductResolver,
    ProductGuard
//  Another way of using resolver
//  {
//      provide: 'productProvider',
//      useValue: () => {
//        return {
//          id: 5,
//          productName: 'Hammer',
//          description: 'Test description for a hammer'
//        };
//      }
//    }
  ]
})
export class ProductModule {}
