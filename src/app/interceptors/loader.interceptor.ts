import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { CommonserviceService } from '../service/commonservice.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private commonserviceService: CommonserviceService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
     this.commonserviceService.show();

     return next.handle(request).pipe(
           finalize(() => this.commonserviceService.hide()),
     );
  }
}