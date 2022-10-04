import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from 'src/app/Pages/nopagefound/nopagefound.component';
import { AuthRoutingModule } from './auth/auth.routing';
// import { PagesComponent } from './Pages/Pages.component';


import { PagesRoutingModule } from './Pages/pages.routing';
// import { NopagefoundComponent } from 'src/Pages/nopagefound/nopagefound.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '', component: PagesComponent, pathMatch: 'full' },
  // { path: '', loadChildren: () => import('./Pages/pages.routing').then(m => m.PagesRoutingModule), pathMatch: 'full' },
  
  { path: '**', component: NopagefoundComponent },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
