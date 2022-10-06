import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';
import { FormBuilder, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { es } from 'date-fns/locale';
import { MatDialog } from '@angular/material/dialog';
import { DetallesConsultaComponent } from './detalles-consulta/detalles-consulta.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  displayedColumns: string[] = ['fechaR', 'proveedor', 'responsable', 'areaTrabajo', 'estatus', 'detalles'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
  
  constructor(private formBuilder: FormBuilder,
              private ventana: MatDialog,
  ) { }

  ngOnInit() {
  }

  onSubmit(){

  }


  abrirDetalles(){
    this.ventana.open(DetallesConsultaComponent,{disableClose:true}).afterClosed().subscribe(e =>{
      if (e) {
        console.log(e);        
      }
    })
  }
  filtrosF = this.formBuilder.group({
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

