import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbDate, NgbDateStruct, NgbInputDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { CommonserviceService } from 'src/app/service/commonservice.service';
import { GeneralService } from 'src/app/service/generalservice.service';

@Component({
  selector: 'app-createCollege',
  templateUrl: './createCollege.component.html',
  styleUrls: ['./createCollege.component.scss'],
  providers: [NgbInputDatepickerConfig]
})
export class CreateCollegeComponent implements OnInit {
  isLoading: boolean;
  college: any = {};
  rolesList =[];
  @Input() collageData:any = {};
  @Output() collageEmit = new EventEmitter();

  statusOption = [
    {
      'label': 'Active',
      'value': 0
    },
    {
      'label': 'Inactive',
      'value': 1
    },
  ]
  
  constructor(
    private generalService: GeneralService,
    private commonserviceService: CommonserviceService,
    config: NgbInputDatepickerConfig,
  ) {
   // config.outsideDays = 'hidden';

    //config.autoClose = 'outside';

    // setting datepicker popup to open above the input
    config.placement = ['top-start', 'top-end'];
   }

  ngOnInit() {
    this.college.name ="";
    if(this.collageData){
      this.college = this.collageData;
      if(this.college.LicenseLastDate) {
        let datesplit = this.college.LicenseLastDate.split('T');
        let d = datesplit[0].split('-');
        let date = {
          year: parseInt(d[0]),
          month: parseInt(d[1]),
          day: parseInt(d[2]),
        }
        this.college.datetemp  = date;
     }
     else{
      this.college.datetemp = new Date();
     }
    }
  }

  onSubmit(form: NgForm){
    if (form.invalid) {
      return;
    }
    let date;
    if(this.college.datetemp) {
       date  = `${this.college.datetemp.year}- ${this.college.datetemp.month}- ${this.college.datetemp.day}`;
    }
    let obj;
     obj = { 
      Name: this.college.Name,
      DisplayName: this.college.DisplayName,
      Mobile:  this.college.Mobile,
      Email:  this.college.Email,
      LicenseLastDate:  date ? date : new Date(),
      STATUS: this.college.STATUS
    }
    if(this.college.CollegeId) {
      obj.CollegeId = this.college.CollegeId;
      obj.ModifiedBy = this.college.ModifiedBy;
     }
    this.isLoading = true;
    this.generalService.addCollegeData({ data: obj }).subscribe(
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
