import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/service/authservice.service';
import { CommonserviceService } from 'src/app/service/commonservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  login: any ={};
  constructor(
    private authserviceService: AuthserviceService,
    private commonserviceService : CommonserviceService,
    private router : Router,
  ) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }


  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if(this.login.email == 'admin' && this.login.password =="123456"){
      this.authserviceService.setLocalItem('authData',this.login, true);
      this.commonserviceService.showSuccess('login successfully');
      this.router.navigate(['admin/registration']);
    } else{
      console.log();
      this.commonserviceService.showError('some thing went wrong please try again after some time')
    }
  }
}
