import { Component, OnInit } from '@angular/core';
import {registroService} from '../../services/registros.service';
import {CategoriasService} from '../../services/categorias.service';
import {MesesService} from '../../services/meses.service';
import { categoria } from '../../models/categoria';
import { fecha } from '../../models/meses';
import { Registro } from '../../models/registros';

@Component({
  selector: 'app-lista-registros',
  templateUrl: './lista-registros.component.html',
  styleUrls: ['./lista-registros.component.css']
})
export class ListaRegistrosComponent implements OnInit {
  
  totRegistros: Registro[]=[];
  totCategorias: categoria[]=[];
  totMeses: fecha[]=[];

  constructor(
    public registros: registroService,
    public categorias: CategoriasService,
    public meses: MesesService
    ) { }
  filterCategorias= '';
  filterMeses= '';

  ngOnInit(): void {
    this.totRegistros = this.registros.obtenerRegistros();
    console.log(this.totRegistros)
    this.totCategorias= this.categorias.obtenerCategoria();
    console.log(this.totCategorias)
    this.totMeses= this.meses.obtenerMeses();
    console.log(this.totMeses)
  }

}
