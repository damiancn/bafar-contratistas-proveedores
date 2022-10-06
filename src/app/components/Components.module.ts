import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { RegistroComponent } from './registro/registro.component';
import {MatTableModule} from '@angular/material/table';
import { ConsultaComponent } from './consulta/consulta.component';
import { DetallesConsultaComponent } from './consulta/detalles-consulta/detalles-consulta.component';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    RegistroComponent,
    ConsultaComponent,
    DetallesConsultaComponent,
  ],
  imports: [
    CommonModule,

    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,

    PdfViewerModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    RegistroComponent
  ]
})
export class ComponentsModule { }
