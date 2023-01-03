import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonserviceService } from 'src/app/service/commonservice.service';
import { GeneralService } from '../../service/generalservice.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  registratiom :any = {
    IdRole : 3
  };
  rolesList = [
    {
      Id: null,
      name: '...loading'
    }
  ]
  isTableShow: boolean = true;
  isLoading: boolean;

  constructor(
    private generalService: GeneralService,
    private commonserviceService: CommonserviceService,
  ) { }

  ngOnInit() {
    this.getRoles();
  }

  onSubmit(form: NgForm){
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    const obj = {
     ...this.registratiom,
      Password:'Admin@123',
      IsActive: '1',
      UserLock:'1',
      NewUser:'1',
      LastPasswordChange : new Date(),
      CreatedBy: '1',
      UserId: this.registratiom.UserId ? this.registratiom.UserId : 0,
      DisplayEmail: this.registratiom.DisplayEmail  == true ? 1 : 0,
      DisplayMobile: this.registratiom.DisplayMobile  == true ? 1 : 0,
    }
    this.generalService.adduser({ data: obj }).subscribe(
      (res) => {
        if(res == 1){
          this.regform();
        } else{

        }
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
    this.registratiom  = {};
  }

  regform(){
    this.registratiom  = {};
    this.isTableShow = !this.isTableShow;
  }


  getRoles(){
    this.generalService.getRoles().subscribe(
      (res) => {
        this.rolesList = res;
      },
      (err) => {
        this.isLoading = false;
       //this.commonserviceService.showError(err?.message);
      })
  }
  selectedUser(ev){
    if(ev){
      this.registratiom.DisplayEmail =  ev.DisplayEmail  == 1 ? true : false;
      this.registratiom.DisplayMobile = ev.DisplayMobile  == 1 ? true : false;
    }
    this.isTableShow = false;
    this.registratiom = ev;
  }
}
