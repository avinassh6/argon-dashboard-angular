import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collage',
  templateUrl: './collage.component.html',
  styleUrls: ['./collage.component.scss']
})
export class CollageComponent implements OnInit {
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
