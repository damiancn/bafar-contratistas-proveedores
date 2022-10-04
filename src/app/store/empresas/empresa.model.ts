import { Empresa } from "src/app/interfaces/empresa/empresa.interface";

export class EmpresaStateModel {
  error?: any = {};
  message?: any = {};
  empresas: Empresa[] = [];
  empresasConCitasDelDia: Empresa[] = [];
  empresaActiva: any = {};
  empresasCargadas: boolean = false;
}