import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {

  transform(value:any[], searchText:any): any {
    if(searchText === ""){
        return value;
    }

    return value.filter((x:any)=>{
        return x.name.toLowerCase().includes(searchText.toLowerCase());
    })
  }

}
