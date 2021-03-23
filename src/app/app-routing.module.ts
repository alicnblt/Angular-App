import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DontfileComponent } from './dontfile/dontfile.component';
import { DrugAddComponent } from './drug/drug-add/drug-add.component';
import { DrugComponent } from './drug/drug.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'ilaçlarım', component:DrugComponent},
  {path:'liste', component:DrugComponent},
  {path:'ekle', component:DrugAddComponent, 
  // canActivate:[LoginGuard]
},
  {path:'login', component:LoginComponent},
  {path:'giriş', component:HomeComponent},
  {path:'not-found', component:DontfileComponent},
  {path:'**', redirectTo:'/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
