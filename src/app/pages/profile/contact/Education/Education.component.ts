import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { EducationInfo, EducationLevels,  EducationType,  Pagination } from 'src/app/interface/commonInterface';
import { CommonserviceService } from 'src/app/service/commonservice.service';
import { GeneralService } from 'src/app/service/generalservice.service';

@Component({
  selector: 'app-Education',
  templateUrl: './Education.component.html',
  styleUrls: ['./Education.component.scss']
})
export class EducationComponent implements OnInit {

  isTableShow: boolean = true;
  isLoading: boolean;
  data:any = {};
  Yearslist:any = [];
  UserId = '870F7047-EA28-49F7-A90E-01A1C0A73108'; 
  searchText!: string;
  pagination:Pagination = {};
  educationList:EducationInfo[] = [];
  educationType: EducationType[] = [];
  educationLevels:EducationLevels[] = [];
  
  constructor(
    private generalService: GeneralService,
    private commonserviceService: CommonserviceService,
  ) {
    this.pagination = {...this.commonserviceService.pagination};
   }

  ngOnInit() {
    this.Yearslist = this.getYears();
    this.data['FromYear'] = '2000';
     this.data['ToYear'] = '2000';
     this.getEdcuationDetails();
     this.getInitialData();
  }

  educationAdd(){
    this.isTableShow = !this.isTableShow;
  }

  onSubmit(form: NgForm){
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    let obj = {
      ...this.data,
      IsActive: 1,
      // CreatedBy:this.UserId,
      // UserId: this.UserId
    }

    this.generalService.addEducation({ data: obj }).subscribe(
      (res) => {
        this.eduform();
        this.commonserviceService.showSuccess('Created/ update successfully');
        this.isLoading = false;
      },
      (err) => {
        this.isLoading = false;
       console.log(err);
       //this.commonserviceService.showError(err?.message)
      }
      )
  }

  resetForm(){
    this.data  = {};
  }

  eduform(){
    this.data  = {};
    this.isTableShow = !this.isTableShow;
  }

  getYears(){
    const d = new Date();
    let year = d.getFullYear();
    let y = [];
    for (let i = 1900; i < year; i++) {
      y.push(i);
     }
    return y;
  }

  getEdcuationDetails() {
    this.isLoading = true;
    //this.searchText
    const obj ={
      UserId: this.UserId
    }
    this.generalService.getEdcuationDetails(obj,this.searchText).subscribe(
      (res) => {
         this.educationList[0] =res;
        this.isLoading = false;
        this.pagination.collectionSize = this.educationList.length;
      },
      (err) => {
        this.isLoading = false;
       console.log(err)
      })
  }

  remove(obj:any){
    this.commonserviceService.confirm('Please confirm..', 'Do you really want to ... ?')
    .then((confirmed) => this.delEdu(obj))
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  delEdu(edu:any){
    this.isLoading = true;
    const obj = {
      UserId: edu.UserId,
    }
    this.generalService.delete(obj, 'deleteEducationDetailsOfUser').subscribe(
      (res) => {
        this.isLoading = false;
        this.getEdcuationDetails();
      },
      (err) => {
        this.isLoading = false;
       console.log(err);
       this.commonserviceService.showError(err)
      })
  }


  getInitialData(){
    const EducationTypes =  this.generalService.getTypes('getEducationTypes');
    const EducationLevels =  this.generalService.getTypes('getEducationLevels');
    forkJoin([EducationTypes,EducationLevels]).subscribe(result =>{
      this.educationType = result[0];
      this.educationLevels = result[1];
    })
  }

}
