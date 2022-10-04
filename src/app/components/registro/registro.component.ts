import { formatDate } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { format } from 'date-fns';

import { es } from 'date-fns/locale';
import { DocumentosService } from 'src/app/services/documentos/documentos.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {

  @ViewChild('pagoImssFileInput') pagoImssFileInput: ElementRef | undefined;
  @ViewChild('altaImssFileInput') altaImssFileInput: ElementRef | undefined;
  @ViewChild('permisoEspecialDeTrabajoFileInput') permisoEspecialDeTrabajoFileInput: ElementRef | undefined;
  @ViewChild('dc3FileInput') dc3FileInput: ElementRef | undefined;
  @ViewChild('polizaResponsabilidadCivilFileInput') polizaResponsabilidadCivilFileInput: ElementRef | undefined;
  @ViewChild('listaDeTrabajadoresFileInput') listaDeTrabajadoresFileInput: ElementRef | undefined;
  @ViewChild('archivoDeEvidenciasFileInput') archivoDeEvidenciasFileInput: ElementRef | undefined;
  @ViewChild('formatoDeHerramientaFileInput') formatoDeHerramientaFileInput: ElementRef | undefined;

  imgContenedor?: any = 'assets/resources/add_file.png';
  imgAnadirDoc?: any = 'assets/resources/';

  public fechaInicioPeriodoDeServicio = format(new Date(), 'yyyy-MM-dd', { locale: es });

  public pdfSrc: any;
  public pdfPagoImssSrc: any;

  fileToUpload: File | null = null;

  pagoImssPdfFileBase64: any;
  altaImssPdfFileBase64: any;

  isEditable = true;

  constructor(
    private _formBuilder: FormBuilder,
    private _documentosService: DocumentosService,
  ) { }

  ngOnInit() {
  }

  openPagoImssFile() {
    this.pagoImssFileInput?.nativeElement.click();
  }

  openAltaImssFile() {
    this.altaImssFileInput?.nativeElement.click();
  }

  openPermisoEspecialDeTrabajoFile() {
    this.permisoEspecialDeTrabajoFileInput?.nativeElement.click();
  }

  openDc3FileInput() {
    this.dc3FileInput?.nativeElement.click();
  }

  openPolizaResponsabilidadCivilFileInput() {
    this.polizaResponsabilidadCivilFileInput?.nativeElement.click();
  }

  openListaDeTrabajadoresFileInput() {
    this.listaDeTrabajadoresFileInput?.nativeElement.click();
  }

  openArchivoDeEvidenciasFileInput() {
    this.archivoDeEvidenciasFileInput?.nativeElement.click();
  }

  openFormatoDeHerramientaFileInput() {
    this.formatoDeHerramientaFileInput?.nativeElement.click();
  }

  convertToBase64(file: any, callback?: any) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event: any) => {
      this.registroFormGroup.value.pagoImssFile = event.target.result;
    };
    
    reader.onerror = (event: any) => {
      console.log("File could not be read: " + event.target.error.code);
    };
  }

  onFileSelected(event: Event) {
    if (typeof (FileReader) !== 'undefined') {
      let reader = new FileReader();
  
      reader.onload = (event: any) => {
        this.pdfSrc = event.target.result;
      };
  
      // reader.readAsArrayBuffer($img.files[0]);
    }
  }

  handlePagoImssFileInput(event: any) {
    // console.warn(event.target.files[0]);
    // this.convertToBase64(event.target.files[0]);
    this.registroFormGroup.value.pagoImssFile = event.target.files[0];
    // console.warn(this.registroFormGroup);
    
    if (typeof (FileReader) !== 'undefined') {
      let reader = new FileReader();
  
      reader.onload = (event: any) => {
        this.pdfPagoImssSrc = event.target.result;
      };
      
      reader.readAsArrayBuffer(event.target.files[0]);
    }

    // console.warn(this.pdfPagoImssSrc)
  }

  handleAltaImssFileInput(event: any) {
    console.warn(event.target.files[0]);
    // this.convertToBase64(event.target.files[0]);
  }

  handlePermisoEspecialDeTrabajoFile(event: any) {
    console.warn(event.target.files[0]);
    // this.convertToBase64(event.target.files[0]);
  }

  handleDc3FileInput(event: any) {
    console.warn(event.target.files[0]);
    // this.convertToBase64(event.target.files[0]);
  }

  handlePolizaResponsabilidadCivilFileInput(event: any) {
    console.warn(event.target.files[0]);
    // this.convertToBase64(event.target.files[0]);
  }

  handleListaDeTrabajadoresFileInput(event: any) {
    console.warn(event.target.files[0]);
    // this.convertToBase64(event.target.files[0]);
  }

  handleArchivoDeEvidenciasFileInput(event: any) {
    console.warn(event.target.files[0]);
    // this.convertToBase64(event.target.files[0]);
  }

  handleFormatoDeHerramientaFileInput(event: any) {
    console.warn(event.target.files[0]);
    // this.convertToBase64(event.target.files[0]);
  }

  onSubmit() {
    console.warn("🚀 ~ file: ContratistasProveedores.component.ts ~ line 62 ~ ContratistasProveedoresComponent ~ onSubmit ~ registroFormGroup", this.registroFormGroup.value);

    this._documentosService.saveDocument(this.registroFormGroup.value.pagoImssFile!)
      .subscribe(result => {
        console.warn(result)
      })
  }

  // * DATOS GENERALES
  registroFormGroup = this._formBuilder.group({
    empresa: ['Ecosat', Validators.required],
    responsable: ['Alejandro Vázquez', Validators.required],
    telefono: ['6146020945', Validators.required],
    anfitrion: ['Salvador', Validators.required],
    noOrdenDeTrabajo: ['100589', Validators.required],
    fechaDeRegistro: [formatDate(new Date(), 'yyyy-MM-dd', 'en'), Validators.required],
    areaDeTrabajo: ['Servidor', Validators.required],
    fechaInicioPeriodoDeServicio: [format(new Date(), 'yyyy-MM-dd', { locale: es }), Validators.required],
    fechaFinPeriodoDeServicio: [format(new Date(), 'yyyy-MM-dd', { locale: es }), Validators.required],
    paymentPeriod: [format(new Date(), 'yyyy-MM-dd', { locale: es }), Validators.required],
    appliedDate: [format(new Date(), 'yyyy-MM-dd', { locale: es }), Validators.required],
    validity: [format(new Date(), 'yyyy-MM-dd', { locale: es }), Validators.required],
    fechaCursoInduccionDeSeguridad: [format(new Date(), 'yyyy-MM-dd', { locale: es }), Validators.required],
    pagoImssFile: ['', Validators.required],
    altaImssFile: ['', Validators.required],
    permisoEspecialDeTrabajo: ['', Validators.required],
    dc3: ['', Validators.required],
    polizaResponsabilidadCivil: ['', Validators.required],
    listaDeTrabajadores: ['', Validators.required],
    archivoDeEvidencias: ['', Validators.required],
    formatoDeHerramienta: ['', Validators.required],
    comentariosAcceso: ['', Validators.required],
  });

}
