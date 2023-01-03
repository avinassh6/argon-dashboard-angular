import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonserviceService } from 'src/app/service/commonservice.service';
import { GeneralService } from 'src/app/service/generalservice.service';

@Component({
  selector: 'app-collegelist',
  templateUrl: './collegelist.component.html',
  styleUrls: ['./collegelist.component.scss']
})
export class CollegelistComponent implements OnInit {
  isLoading:boolean = false;
  @Output() selectedcollage = new EventEmitter();
  allCollegeList: any = [];
  tableBodyHeight: number = 300;
  pagination:any = {};
  searchText: string = '';

  constructor(
    private generalService: GeneralService,
    private commonserviceService: CommonserviceService,
  ) { 
    this.pagination = {...this.commonserviceService.pagination}
  }

  ngOnInit() {
    this.getAllCollage();
  }

  getAllCollage(){
    this.isLoading = true;
    this.generalService.getAllCollageData().subscribe(
      (res) => {
        this.allCollegeList = res;
        this.isLoading = false;
        this.tableBodyHeight = this.commonserviceService.getTableHeight('eduTableBody');
        this.pagination.collectionSize = this.allCollegeList.length;
      },
      (err) => {
        this.isLoading = false;
       //this.commonserviceService.showError(err?.message);
      })
  }
  
  edit(item){
    this.selectedcollage.emit(item);
  }

  
  remove(obj:any){
    this.commonserviceService.confirm('Please confirm..', 'Do you really want to ... ?')
    .then((confirmed) => this.deleteUser(obj))
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  

  deleteUser(data){
    this.isLoading = true;
    const obj = {
      CollegeId: data.CollegeId,
    }
    this.generalService.deleteCollegeDate(obj).subscribe(
      (res) => {
        this.isLoading = false;
        this.getAllCollage();
      },
      (err) => {
        this.isLoading = false;
       //this.commonserviceService.showError(err?.message);
      })
  }

  searchVal(ev){
    this.pagination.page = 1;
    this.searchText= ev;
    this.getAllCollage();
  }


}
