import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { Pagination } from '../interface/commonInterface';
import { ConfirmDialogComponent } from '../pages/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

isLoading = new Subject<boolean>();

constructor(
  private toastr: ToastrService,
  private modalService: NgbModal
) { }

pagination:Pagination = {
  page: 1,
  collectionSize:10,
  pageSize:2
}

showSuccess(text) {
   this.toastr.success(text);
}

showError(errormeg) {
   this.toastr.error(errormeg, '', {
    timeOut: 3000,
  });
}

getTableHeight(id){ 
  return document.getElementById(id).offsetTop;
}
public confirm(
  title: string,
  message: string,
  btnOkText: string = 'OK',
  btnCancelText: string = 'Cancel',
  dialogSize: 'sm'|'lg' = 'sm'): Promise<boolean> {
  const modalRef = this.modalService.open(ConfirmDialogComponent, { size: dialogSize });
  modalRef.componentInstance.title = title;
  modalRef.componentInstance.message = message;
  modalRef.componentInstance.btnOkText = btnOkText;
  modalRef.componentInstance.btnCancelText = btnCancelText;
  return modalRef.result;
}

show() {
  this.isLoading.next(true);
}

hide() {
  this.isLoading.next(false);
}



}
