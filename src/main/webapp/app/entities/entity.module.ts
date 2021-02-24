import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(m => m.TrashBotOrderModule),
      },
      {
        path: 'courier',
        loadChildren: () => import('./courier/courier.module').then(m => m.TrashBotCourierModule),
      },
      {
        path: 'shift',
        loadChildren: () => import('./shift/shift.module').then(m => m.TrashBotShiftModule),
      },
      {
        path: 'courier-company',
        loadChildren: () => import('./courier-company/courier-company.module').then(m => m.TrashBotCourierCompanyModule),
      },
      {
        path: 'garbage',
        loadChildren: () => import('./garbage/garbage.module').then(m => m.TrashBotGarbageModule),
      },
      {
        path: 'address',
        loadChildren: () => import('./address/address.module').then(m => m.TrashBotAddressModule),
      },
      {
        path: 'payment',
        loadChildren: () => import('./payment/payment.module').then(m => m.TrashBotPaymentModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class TrashBotEntityModule {}
