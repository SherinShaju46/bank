import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  //1st- in which data we are applying this pipe, 2nd- based on what user need to search(the keyword), 3rd- using which we are filtering
  transform(transactionsArray: any[], searchTerm: string, searchType: string): any[] {
    const result: any[] = []
    if (!transactionsArray || searchTerm == '' || searchType == "") {
      return transactionsArray;
    }
    else {
      transactionsArray.forEach(item => {
        if (item[searchType].includes(searchTerm)) {
          result.push(item)
        }
      })
    }
    return result
  }

}
