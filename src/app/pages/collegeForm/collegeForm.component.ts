import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonserviceService } from 'src/app/service/commonservice.service';
import { GeneralService } from 'src/app/service/generalservice.service';

@Component({
  selector: 'app-collegeForm',
  templateUrl: './collegeForm.component.html',
  styleUrls: ['./collegeForm.component.scss']
})
export class CollegeFormComponent implements OnInit {
  isLoading: boolean;
  college: any = {};
  rolesList =[];
  @Input() collageData:any = {};
  @Output() collageEmit = new EventEmitter();

  accountsOption = [
    {
      'label': 'Approved',
      'value': 0
    },
    {
      'label': 'Inprogress',
      'value': 1
    },
    {
      'label': 'Created',
      'value': 2
    },
    {
      'label': 'Hold',
      'value': 3
    }

  ]

  constructor(
    private generalService: GeneralService,
    private commonserviceService: CommonserviceService,
  ) { }

  ngOnInit() {
    this.college.AccountStatus = 0;
    if(this.collageData){
      this.college = this.collageData;
    }
  }

  onSubmit(form: NgForm){
    if (form.invalid) {
      return;
    }
    const obj = { 
      ...this.college,
      EmailVerified: 0,
      SMSVerfied: 1
    }
    this.isLoading = true;
    this.generalService.addCollege({ data: obj }).subscribe(
      (res) => {
        if(res == 1){
          this.collageEmit.emit(true);
        } else{
          this.collageEmit.emit(false);
        }
        this.commonserviceService.showSuccess('Created/ update successfully');
        this.isLoading = false;
      },
      (err) => {
        this.isLoading = false;
       console.log(err);
       this.commonserviceService.showError(err)
      }
      )
  }


  colform(){
    this.collageEmit.emit(true);
  }
}
