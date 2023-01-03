import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonserviceService } from 'src/app/service/commonservice.service';
import { GeneralService } from 'src/app/service/generalservice.service';

@Component({
  selector: 'app-carrer',
  templateUrl: './carrer.component.html',
  styleUrls: ['./carrer.component.scss']
})
export class CarrerComponent implements OnInit {

  isTable:boolean = false;
  isLoading: boolean;
  carrer:any ={};
  UserId = '870F7047-EA28-49F7-A90E-01A1C0A73108';
  pagination: any = {};
  contactList:any ={};
  searchText:string = '';
  tableBodyHeight: number;

  constructor(
    private generalService: GeneralService,
    private commonserviceService: CommonserviceService,
  ) {
    this.pagination = {...this.commonserviceService.pagination};
   }

  ngOnInit() {
    this.getContactDetails();
  }

  addCarrer(){

  }

  onSubmit(form: NgForm){
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    let obj = {
      ...this.carrer,
      IsActive: 1,
      CreatedBy:this.UserId,
      UserId: this.UserId
    }

    this.generalService.addcarrer({ data: obj }).subscribe(
      (res) => {
        this.carrerform();
        this.commonserviceService.showSuccess('Created/ update successfully');
        this.isLoading = false;
        this.getContactDetails();
      },
      (err) => {
        this.isLoading = false;
      // this.commonserviceService.showError(err?.message)
      }
      )
  }

  resetForm(){
    this.carrer  = {};
  }

  carrerform(){
    this.carrer  = {};
    this.isTable = !this.isTable;
  }

  getContactDetails() {
    this.isLoading = true;
    //this.searchText
    const obj ={
      UserId: this.UserId
    }
    this.generalService.getContactDetails(obj,this.searchText).subscribe(
      (res) => {
        this.contactList = res;
        this.isLoading = false;
        this.pagination.collectionSize = this.contactList.length;
        this.tableBodyHeight = this.commonserviceService.getTableHeight('eduTableBody');
      },
      (err) => {
        this.isLoading = false;
       console.log(err)
      })
  }
 


}
