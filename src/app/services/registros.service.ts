import { Injectable } from '@angular/core';

import { Registro } from '../models/registros';


@Injectable({
  providedIn: 'root'
})
export class registroService {
  registros: Registro[];
  constructor() { 
    this.registros = [
      //{nombre: 'Asado', detalle: 'Asado con los pibes', precio: '300', transaccion: 'Egreso', categoria: 'Servicio', fecha: 'Enero'},
      //{nombre: 'Trabajo', detalle: 'Cobro de sueldo', precio: '300', transaccion: 'Ingreso', categoria: 'Servicio', fecha: 'Febrero'}
    ];
  }
  obtenerRegistros(){
    if(localStorage.getItem('registros')===null){
      return this.registros;
    }else{
      this.registros = JSON.parse(localStorage.getItem('registros')||'{}');
      return this.registros;
    }
    
  }
  agregarRegistros(registro:Registro){
    this.registros.push(registro);
    let registros: Registro[] = [];
    if(localStorage.getItem('registros') == null){
      registros.push(registro);
      localStorage.setItem('registros', JSON.stringify(registros));
    }else{
      registros = JSON.parse(localStorage.getItem('registros')||'{}');
      registros.push(registro);
      localStorage.setItem('registros', JSON.stringify(registros));

    }
    
    
  }
}
