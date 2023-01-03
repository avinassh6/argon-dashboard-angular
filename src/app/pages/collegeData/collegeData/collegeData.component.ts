import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collegeData',
  templateUrl: './collegeData.component.html',
  styleUrls: ['./collegeData.component.scss']
})
export class CollegeDataComponent implements OnInit {
  isTableShow :boolean = true;
  collage:any = {};
  constructor() { }

  ngOnInit() {
  }
  
  collegeForm(){
    this.collage = {};
    this.isTableShow = !this.isTableShow;

  }

  selectedcollage(ev){
    this.isTableShow = false;
    this.collage = ev;
  }

  collageEmit(ev){
    this.isTableShow = ev;
  }

}
