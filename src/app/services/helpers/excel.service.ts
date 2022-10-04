import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver';

import { format } from 'date-fns'

import { es, ru } from 'date-fns/locale'


@Injectable({
  providedIn: 'root',
})

export class ExcelService {

  constructor() { }

  generateExcel(datosAExportar: any, fechas: any) {

    // tslint:disable-next-line: no-console
    console.log('Datos:', datosAExportar);

    // Excel Title, Header, Data
    const title = 'Reporte de Citas';
    const header = ['ID Cita', 'Fecha Inicio', 'Fecha Fin', 'Comentarios', 'Nombre', 'Apellido Paterno', 'Apellido Materno', 'Celular', 'Correo', 'Empresa', 'Marca', 'Modelo', 'Placas'];
    // Create workbook and worksheet
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Reporte Citas');
    // Add Row and formatting
    const titleRow = worksheet.addRow([title]);
    titleRow.alignment = { vertical: 'middle', horizontal: 'center' };
    titleRow.font = { name: 'Comic Sans MS', family: 4, size: 25, bold: true }
    titleRow.getCell(1).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
    worksheet.addRow([]);
    const subTitleRow = worksheet.addRow([
      `Registros desde: ${format(fechas.fechaInicio, 'DD-MM-YYY', { locale: es })} hasta: ${format(fechas.fechaFin, 'DD-MM-YYY', { locale: es })}`,
    ]);
    // tslint:disable-next-line: max-line-length
    subTitleRow.getCell(1).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
    // Add Image
    // let logo = workbook.addImage({
    //   base64: logoFile.logoBase64,
    //   extension: 'png',
    // });
    // worksheet.addImage(logo, 'E1:F3');
    worksheet.mergeCells('A1:M2');
    worksheet.mergeCells('A3:M3');
    // Blank Row
    worksheet.addRow([]);
    // Add Header Row
    const headerRow = worksheet.addRow(header);

    // Cell Style : Fill and Border
    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFFFF00' },
        bgColor: { argb: 'FF0000FF' },
      };
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
    });
    // worksheet.addRows(data);
    // Add Data and Conditional Formatting
    const content = worksheet.addRows(datosAExportar);
    // * recorriendo el arreglo

    // datosAExportar.forEach((d: any) => {
    //   console.log(d);
    //   const row = worksheet.addRow(d);
    //   const qty = row.getCell(5);
    //   let color = 'FF99FF99';
    //   if (+qty.value! < 500) {
    //     color = 'FF9999';
    //   }
    //   qty.fill = {
    //     type: 'pattern',
    //     pattern: 'solid',
    //     fgColor: { argb: color },
    //   };
    // });

    worksheet.getColumn(3).width = 30;
    worksheet.getColumn(4).width = 30;
    worksheet.addRow([]);
    // Footer Row
    const footerRow = worksheet.addRow(['Documento generado por Ecosat']);
    footerRow.getCell(1).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFCCFFE5' },
    };
    footerRow.getCell(1).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
    // Merge Cells
    worksheet.mergeCells(`A${footerRow.number}:M${footerRow.number}`);
    // Generate Excel File with given name
    workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      saveAs(blob, `Reporte/${format(new Date(), 'DD-MM-YYYY ', { locale: es })}.xlsx`);
    });
  }
}
