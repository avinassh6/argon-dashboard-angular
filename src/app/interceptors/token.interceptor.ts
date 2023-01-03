import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { CommonserviceService } from "../service/commonservice.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private commonserviceService: CommonserviceService,
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError((x) => this.handleError(x)));
  }

  handleError(error: HttpErrorResponse): Observable<any> {
    let errorMsg = "";
    if (error.error instanceof ErrorEvent) {
      console.log("This is client side error");
      errorMsg = `Error: ${error.error.message}`;
      this.commonserviceService.showError(error.message);
    } else {
      console.log("This is server side error");
      errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
      this.commonserviceService.showError(error.message);
    }
    console.log(error);
    return throwError(() => errorMsg);
  }
}
