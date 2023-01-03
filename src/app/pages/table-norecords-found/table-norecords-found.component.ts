import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-norecords-found',
  templateUrl: './table-norecords-found.component.html',
  styleUrls: ['./table-norecords-found.component.scss']
})
export class TableNorecordsFoundComponent implements OnInit {
  @Input() colspan:number;
  constructor() { }

  ngOnInit() {
  }

}
