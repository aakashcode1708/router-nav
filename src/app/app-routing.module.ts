import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateInvoicesComponent } from './components/create-invoices/create-invoices.component';
import { UpdateInvoicesComponent } from './components/update-invoices/update-invoices.component';
import { ViewInvoiceComponent } from './components/view-invoice/view-invoice.component';

const routes: Routes = [
  {
    path: 'view-invoice',
    component: ViewInvoiceComponent,
  },
  {
    path: 'add-invoice',
    component: CreateInvoicesComponent,
  },
  {
    path: 'update-invoice',
    component: UpdateInvoicesComponent,
  },
  {
    path: 'logout',
    component: AppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
