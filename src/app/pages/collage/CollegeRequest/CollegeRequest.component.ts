import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-CollegeRequest',
  templateUrl: './CollegeRequest.component.html',
  styleUrls: ['./CollegeRequest.component.scss']
})
export class CollegeRequestComponent implements OnInit {
  college:any =  {};
  date: NgbDateStruct;
  isLoading: boolean;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
  }

  resetForm() {
    this.college =  {};
  }

  colform(){

  }

}
