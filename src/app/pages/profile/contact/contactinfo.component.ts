import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactinfo',
  templateUrl: './contactinfo.component.html',
  styleUrls: ['./contactinfo.component.scss']
})
export class ContactinfoComponent implements OnInit {
  contact: any = {};
  isLoading: boolean;
  countryList: any =[];
  stateList:any = [];
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
   
  }

  resetForm(){
    this.contact  = {};
  }

  prfform(){
    this.contact  = {};
  }

  remove(){
    
  }

}
