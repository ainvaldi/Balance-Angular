import { Component, OnInit } from '@angular/core';
import {registroService} from '../../services/registros.service';
import { Registro } from '../../models/registros';


@Component({
  selector: 'app-valores',
  templateUrl: './valores.component.html',
  styleUrls: ['./valores.component.css']
})
export class ValoresComponent implements OnInit {

  valores: Registro[]=[];
  
  balance: number=0;
  egresos: number=0;
  ingresos: number=0;

  constructor(
    public registros: registroService
  ) { }

  ngOnInit(): void {
    this.valores = this.registros.obtenerRegistros();
    let totalEgresos = 0;
    let totalIngresos = 0;
    let e = 0;
    let I = 0;
    for (let i = 0; i < this.valores.length; i++) {
      if (this.valores[i].transaccion== "Egreso") {
        e = parseFloat(this.valores[i].precio);
        totalEgresos = (totalEgresos + e);
      } else {
        I = e = parseFloat(this.valores[i].precio);
        totalIngresos = (totalIngresos + I)
      }
    }
    this.egresos = totalEgresos;
    this.ingresos = totalIngresos;
    this.balance = totalIngresos - totalEgresos;
  }

}
