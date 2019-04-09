import { NgModule, Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
  transform(userlist, searchText: string): any[] {
    if ( !userlist) {
      return [];
    }
    if ( !searchText) {
      return userlist;
    }
    searchText = searchText.toLowerCase();
    return userlist.filter( it => {
      return it.name.toLowerCase().includes(searchText);
    });

  }
}


