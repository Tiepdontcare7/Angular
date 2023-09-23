import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chancePrice'
})
export class ChancePricePipe implements PipeTransform {

  transform(value: any): any {
    return  value + ' VND';
  }

}
