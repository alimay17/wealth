import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { NewLogComponent } from './new-log/new-log.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'landing', component: LandingComponent},
  {path: 'newLog', component: NewLogComponent },

  // default
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
