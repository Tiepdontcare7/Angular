import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBox'
})
export class SearchBoxPipe implements PipeTransform {

  transform(data: IProduct[], searchText: string): IProduct[] {
    return data?.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
  }

}
