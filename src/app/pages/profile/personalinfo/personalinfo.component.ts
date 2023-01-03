import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.scss']
})
export class PersonalinfoComponent implements OnInit {
  profile :any = {};
  countryList:any = [];
  BloodGroupList:any =[];
  isLoading: boolean;
  genderlist:any =[];
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
    this.profile  = {};
  }

  prfform(){
    this.profile  = {};
  }

}
