import { Injectable } from '@angular/core';

import { fecha } from '../models/meses';

@Injectable({
  providedIn: 'root'
})
export class MesesService {
  meses: fecha[];
  constructor() { 
    this.meses = [
      {mes: 'Enero'},
      {mes: 'Febrero'},
      {mes: 'Marzo'},
      {mes: 'Abril'},
      {mes: 'Mayo'},
      {mes: 'Junio'},
      {mes: 'Julio'},
      {mes: 'Agosto'},
      {mes: 'Septiembre'},
      {mes: 'Octubre'},
      {mes: 'Noviembre'},
      {mes: 'Diciembre'},
    ];
  }
  obtenerMeses(){
    return this.meses;
  }
}
