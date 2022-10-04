import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Modulos
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from 'src/app/shared/shared.module';
// import { ComponentsModule } from 'src/app/components/components.module';
// import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { PagesComponent } from 'src/app/Pages/Pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsModule } from '../components/Components.module';
import { ContristaProveedorComponent } from './contratista-proveedor/contratista-proveedor.component';
// import { RecepcionistaComponent } from 'src/app/components/recepcionista/recepcionista.component';
// import { CasetaComponent } from 'src/app/components/caseta/caseta.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    ContristaProveedorComponent,
    // RecepcionistaComponent,
    // CasetaComponent,
  ],
  exports: [
    DashboardComponent,
    // PagesComponent,
    // RecepcionistaComponent,
    // CasetaComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ComponentsModule,
    // ComponentsModule,

    MatCardModule,
  ]
})
export class PagesModule { }
