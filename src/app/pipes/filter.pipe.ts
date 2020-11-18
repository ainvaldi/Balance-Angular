import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg=='' || arg.length < 3) return value;
    const resultCategorias = [];
    for(const cate of value){
      if(cate.categoria.toLowerCase().indexOf(arg.toLowerCase())>-1){
        resultCategorias.push(cate);
      };
    };
    return resultCategorias;
  }

}
