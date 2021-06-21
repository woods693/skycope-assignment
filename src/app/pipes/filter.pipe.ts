import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform( log: string, keyword: string): any {
    //console.log(log.split(" "));
    let temp: Array<string>;
    temp = log.toLowerCase().split(/[^\w\s]| /g);
    //console.log(temp);
    if (temp.includes(keyword.toLowerCase()) || keyword === ""){
      return log;
    }
  }
}
