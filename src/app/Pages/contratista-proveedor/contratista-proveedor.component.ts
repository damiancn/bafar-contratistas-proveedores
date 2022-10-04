import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatPaginator } from '@angular/material/paginator';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Select, Store } from '@ngxs/store';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
// import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Observable, Observer, Subject } from 'rxjs';

@Component({
  selector: 'app-agenda',
  templateUrl: './contratista-proveedor.component.html',
  styleUrls: ['./contratista-proveedor.component.css']
})
export class ContristaProveedorComponent implements OnInit {

  modalRefContratistasProveedores?: BsModalRef | null;
  contratistaVisitanteFormGroup!: FormGroup;

  constructor(
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
  }

  crearNuevaCitaContratistaProveedorModal(template: TemplateRef<any>) {
    this.modalRefContratistasProveedores = this.modalService.show(template, {
      class: 'modal-xl',
      backdrop: 'static',
      animated: true,
      ignoreBackdropClick: true,
      id: 'modal-crear-lg-employees',
    });

    this.onHideContratistasProveedoresModal();
  }

  onHideContratistasProveedoresModal() {
    this.modalRefContratistasProveedores?.onHide?.subscribe((reason: string | any) => {
      console.warn('Se ha cerrado');
    });
    // this.showWebcam = true;
  };

  onSubmit() {
    console.warn('Se ha creado exitosamente!')
  }

}
