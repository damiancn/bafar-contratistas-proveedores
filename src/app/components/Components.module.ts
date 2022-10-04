import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [
    RegistroComponent,
  ],
  imports: [
    CommonModule,

    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,

    PdfViewerModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    RegistroComponent
  ]
})
export class ComponentsModule { }
