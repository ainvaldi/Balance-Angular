import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMes'
})
export class FilterMesPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg=='' || arg.length < 3) return value;
    const resultMeses = [];
    for(const mes of value){
      if(mes.fecha.toLowerCase().indexOf(arg.toLowerCase())>-1){
        resultMeses.push(mes);
      };
    };
    return resultMeses;
  }

}
