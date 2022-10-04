import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { NopagefoundComponent } from 'src/app/Pages/nopagefound/nopagefound.component';
import { PagesModule } from 'src/app/Pages/pages.module';
import { CitaState } from 'src/app/store/citas/cita.state';
import { EmpleadoState } from 'src/app/store/empleados/empleados.state';
import { EmpresaState } from 'src/app/store/empresas/empresa.state';
import { MotivosVisitaState } from 'src/app/store/motivosVisita/motivosVisita.state';
import { TagState } from 'src/app/store/tags/tag.state';
import { UsuariosState } from 'src/app/store/usuarios/usuarios.state';
import { VehiculoState } from 'src/app/store/vehiculos/vehiculos.state';
import { VisitanteState } from 'src/app/store/visitantes/visitantes.state';
import { environment } from 'src/environments/environment';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
  ],
  imports: [
    /* It's a module that provides a service called `AuthService` that is used to authenticate
    users. */
    AuthModule,
    
    AppRoutingModule,
    PagesModule,
    BrowserModule,
    
    // ComponentsModule,
    HttpClientModule,
    FormsModule,
    
    /* It's a module that provides a service called `BsModalRef` that is used to reference a modal
    window. */
    ModalModule.forRoot(),
    //=> Basic usage (forRoot can also take options, see the wiki)
    SweetAlert2Module.forRoot(),

    NgxsModule.forRoot([
      CitaState,
      VisitanteState,
      VehiculoState,
      EmpresaState,
      MotivosVisitaState,
      UsuariosState,
      TagState,
      EmpleadoState,
    ],
      { developmentMode: !environment.production }
    ),
    NgxsReduxDevtoolsPluginModule.forRoot({
      // disabled: environment.production
    }),
    NgxsLoggerPluginModule.forRoot({
      // disabled: !environment.production
    }),

    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
