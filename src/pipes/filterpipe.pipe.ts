import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(data: Array<any>, searchPattern: string) : any {
    let result="";
    if(searchPattern){      
      return data.filter( item=> {
        const name = item.name.toLowerCase().includes(searchPattern.toLowerCase());  
        const severity = item.countryCheckSeverity.toLowerCase().includes(searchPattern.toLowerCase()); 
        return (name + severity);
      })
    }
    return data;
  }

}
