import { Component, OnInit } from '@angular/core';
import { registroService} from '../../services/registros.service';
import {MesesService} from '../../services/meses.service';
import {CategoriasService} from '../../services/categorias.service';
import { fecha } from '../../models/meses';
import { categoria } from '../../models/categoria';


@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {

  totMeses: fecha[]=[];
  totCategoria: categoria[]=[];

  constructor(
    public listaRegistros:registroService,
    public fechas: MesesService,
    public categorias: CategoriasService
    ) { }

  
  ngOnInit(): void {
    this.totMeses = this.fechas.obtenerMeses();
    console.log(this.totMeses)
    this.totCategoria= this.categorias.obtenerCategoria();
    console.log(this.totCategoria)

  }

  agregarCategoria(nombreCate: HTMLInputElement, detalleCate: HTMLInputElement){
  this.categorias.agregarCategoria({
    nombreCate: nombreCate.value,
    detalleCate: detalleCate.value
   });
   nombreCate.value='';
   detalleCate.value='';
   return false;
  }
  agregarRegistros(nombre: HTMLInputElement, detalle: HTMLInputElement, precio: HTMLInputElement, transaccion:HTMLSelectElement, categoria:HTMLSelectElement  , fecha:HTMLSelectElement){
    this.listaRegistros.agregarRegistros({
     nombre: nombre.value,
     detalle: detalle.value,
     precio: precio.value,
     transaccion: transaccion.value,
     categoria: categoria.value,
     fecha: fecha.value
    });
    nombre.value='';
    detalle.value='';
    precio.value='';
    transaccion.value='select';
    categoria.value='select';
    fecha.value='select';
    return false;
  }
}
