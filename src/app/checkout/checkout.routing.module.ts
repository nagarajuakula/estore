import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProductsComponent } from "./products/products.component";
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { CheckoutComponent } from './checkout.component';
import { ResultComponent } from './result/result.component';
import { AuthGuard } from '../shared/services/auth.guard';

const routes: Routes = [
    {
        path: 'checkout', component: CheckoutComponent, children: [
            {
                path: "",
                component: ProductsComponent,
                canActivate: [AuthGuard],
                outlet: "checkOutlet",
              },
              {
                path: "shipping-details",
                component: ShippingDetailsComponent,
                outlet: "checkOutlet",
              },
              {
                path: "billing-details",
                component: BillingDetailsComponent,
                outlet: "checkOutlet",
              },
              {
                path: "result",
                component: ResultComponent,
                outlet: "checkOutlet",
              }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class CheckoutRoutingModule { }