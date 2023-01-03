import { Component, OnInit } from '@angular/core';
;

@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.scss']
})
export class ProfileLayoutComponent implements OnInit {

  profile:any = {}
  isLoading: boolean;
  genderlist = [];
  countryList = [];
  BloodGroupList = [];
  profileDetails: boolean = true;
  contactDetails: boolean = false;

  menuItems= [
    { path: 'personalinfo', title:'Personal',  icon:'ni ni-single-02', class: '' },
    { path: 'contactinfo', title:'Contact',  icon:'ni ni-single-copy-04', class: '' },
    { path: 'educationinfo', title:'Education',  icon:'ni ni-book-bookmark', class: '' },
    { path: 'carrerinfo', title:'Carrer',  icon:'ni ni-badge', class: '' },
    { path: 'professionalInfo', title:'Professional',  icon:'fas fa-briefcase', class: '' },
    { path: 'alumniInfo', title:'Alumni',  icon:'ni  ni-collection', class: '' },
    { path: 'chapterLinksInfo', title:'Chapter',  icon:'ni ni-tie-bow', class: '' },
  ]

  constructor() { }

  ngOnInit() {
  }


}
