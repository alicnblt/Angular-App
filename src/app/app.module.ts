import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { DrugComponent } from './drug/drug.component';
import { HomeComponent } from './home/home.component';
import { DontfileComponent } from './dontfile/dontfile.component';
import { SelectComponent } from './drug/select/select.component';
import { DrugAddComponent } from './drug/drug-add/drug-add.component';
import { DrugListComponent } from './drug/drug-list/drug-list.component';
import { AlertifyService } from './services/alertify.service';
import { DrugService } from './services/drug.service';
import { AccountService } from './services/account.service';
import { LoginGuard } from './login/login.guard';



@NgModule({
  declarations: [						
    AppComponent,
      LoginComponent,
      HeaderComponent,
      DrugComponent,
      HomeComponent,
      DontfileComponent,
      SelectComponent,
      DrugAddComponent,
      DrugListComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AlertifyService, DrugService, AccountService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
