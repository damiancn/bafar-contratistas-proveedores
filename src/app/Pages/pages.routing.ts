import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaComponent } from '../components/consulta/consulta.component';
import { RegistroComponent } from '../components/registro/registro.component';
import { AuthGuard } from '../guards/auth.guard';
import { HasRoleGuard } from '../guards/has-role.guard';
import { PagesComponent } from './Pages.component';

const routes: Routes = [
  {
    path: 'home',
    component: PagesComponent,
    // canActivate: [AuthGuard, HasRoleGuard],
    // data: {
    //   role: ['seguridad-industrial']
    // },
    // pathMatch: 'full',
    children: [
      // {
      //   path: '',
      //   component: DashboardComponent,
      //   canActivate: [AuthGuard, HasRoleGuard],
      //   data: {
      //     role: ['seguridad-industrial']
      //   }
      // },
      {
        path: 'registro',
        component: RegistroComponent,
        // loadChildren: () => import('../components/Components.module').then(m => m.ComponentsModule),
        canActivate: [AuthGuard, HasRoleGuard],
        data: {
          role: ['seguridad-industrial']
        },
      },
      {
        path: 'consulta',
        component: ConsultaComponent,
        // loadChildren: () => import('../components/Components.module').then(m => m.ComponentsModule),
        canActivate: [AuthGuard, HasRoleGuard],
        data: {
          role: ['seguridad-industrial']
        },
      },      
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '**', pathMatch: 'full', redirectTo: '/' }
    ],
  },
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    // AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }


