import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchtext',
  templateUrl: './searchtext.component.html',
  styleUrls: ['./searchtext.component.scss']
})
export class SearchtextComponent  {

  @Output() searchVal = new EventEmitter();
  searchText = '';



  searchMethod(){
    this.searchVal.emit(this.searchText);
  }

}
