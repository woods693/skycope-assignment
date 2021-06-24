import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {

  transform(log: any, keyword: string){
    if(keyword != ""){ 
      return this.sanitizer.bypassSecurityTrustHtml(log.replace(new RegExp(`\\b(${keyword})\\b`, 'gi'), '<span style="background-color: yellow">' + `$1` + '</span>'));
    }
    return log;
  };

  constructor(private sanitizer: DomSanitizer){}
}
