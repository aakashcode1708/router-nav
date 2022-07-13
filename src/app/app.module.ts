import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewInvoiceComponent } from './components/view-invoice/view-invoice.component';
import { CreateInvoicesComponent } from './components/create-invoices/create-invoices.component';
import { UpdateInvoicesComponent } from './components/update-invoices/update-invoices.component';
@NgModule({
  declarations: [
    AppComponent,
    ViewInvoiceComponent,
    CreateInvoicesComponent,
    UpdateInvoicesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
