import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile:any = {}
  isLoading: boolean;
  genderlist = [];
  countryList = [];
  BloodGroupList = [];
  profileDetails: boolean = true;
  contactDetails: boolean = false;

  menuItems= [
    { path: 'personalinfodetails', title:'Personal Information',  icon:'ni ni-single-02', class: '' },
    { path: 'contactinfo', title:'Contact Information',  icon:'', class: '' },
    { path: 'Educationinfo', title:'Education Information',  icon:'', class: '' },
    { path: 'carrerinfo', title:'Carrer Information',  icon:'', class: '' },
    { path: 'ProfessionalInfo', title:'Professional Information',  icon:'', class: '' },
    { path: 'chapterLinksInfo', title:'Chapter Information',  icon:'', class: '' },
    { path: 'AlumniInfo', title:'Alumni Information',  icon:'', class: '' },
  ]

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
