import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonserviceService } from 'src/app/service/commonservice.service';
import { GeneralService } from 'src/app/service/generalservice.service';

@Component({
  selector: 'app-regisration-table',
  templateUrl: './regisration-table.component.html',
  styleUrls: ['./regisration-table.component.scss']
})
export class RegisrationTableComponent implements OnInit {
  isLoading: boolean;
  allUsersList:any[] =[];
  userRoles = {
    1: 'Super Admin',
    2: 'College Admin',
    3: 'Member'
  }
  @Output() selectedUser = new EventEmitter();
  tableBodyHeight: number = 300;
  pagination:any = {};

  searchText:string = '';

  constructor(
    private generalService: GeneralService,
    private commonserviceService: CommonserviceService,
  ) { 
    this.pagination = {...this.commonserviceService.pagination};
  }

  ngOnInit() {
    this.getAllusers();
  }

  getAllusers(){
    this.isLoading = true;
    this.generalService.getAllusers(this.searchText).subscribe(
      (res) => {
        this.allUsersList = res;
        this.isLoading = false;
        this.pagination.collectionSize = this.allUsersList.length;
        this.tableBodyHeight = this.commonserviceService.getTableHeight('eduTableBody');
      },
      (err) => {
        this.isLoading = false;
       console.log(err)
      })
  }

  remove(obj:any){
    this.commonserviceService.confirm('Please confirm..', 'Do you really want to ... ?')
    .then((confirmed) => this.deleteUser(obj))
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  edit(obj:any){
    this.selectedUser.emit(obj);
  }

  deleteUser(data){
    this.isLoading = true;
    const obj = {
      UserId: data.UserId,
    }
    this.generalService.deleteUser(obj).subscribe(
      (res) => {
        //this.allUsersList = res;
        this.isLoading = false;
      },
      (err) => {
        this.isLoading = false;
       console.log(err);
       this.commonserviceService.showError(err)
      })
  }

  searchVal(ev){
    this.pagination.page = 1;
    this.searchText= ev;
    this.getAllusers();
  }


}
