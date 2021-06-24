import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(log: string, keyword: string): any{
    let temp: Array<string>;
    temp = log.toLowerCase().split(/[^\w\s]| /g);
    if (temp.includes(keyword.toLowerCase()) || keyword === ""){
      return log;
    };
  };
}
