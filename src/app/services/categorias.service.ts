import { Injectable } from '@angular/core';
import { categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  categorias: categoria[];
  constructor() { 
    this.categorias = [
      //{nombreCate: 'Servicio', detalleCate: 'ok'},
      //{nombreCate: 'Comida', detalleCate: 'ok'}
    ];
  }
  obtenerCategoria(){
    if(localStorage.getItem('categorias')===null){
      return this.categorias;
    }else{
      this.categorias = JSON.parse(localStorage.getItem('categorias')||'{}');
      return this.categorias;
    }
  }
  agregarCategoria(categoria:categoria){
    this.categorias.push(categoria);
    let categorias: categoria[] = [];
    if(localStorage.getItem('categorias') == null){
      categorias.push(categoria);
      localStorage.setItem('categorias', JSON.stringify(categorias));
    }else{
      categorias = JSON.parse(localStorage.getItem('categorias')||'{}');
      categorias.push(categoria);
      localStorage.setItem('categorias', JSON.stringify(categorias));

    }
  }
}

