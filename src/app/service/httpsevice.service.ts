import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { forEach as _forEach } from 'lodash-es';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  systemTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  constructor(private httpClient: HttpClient) {}

  xhr(request: IHttpRequestParams, xhrOptions: any = {}): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    let params: HttpParams = new HttpParams();
    let service: any;
    headers = headers.set('tz', this.systemTimeZone);

    const authHeaders = {
      ...request.headers,
    };

    let url = request.url;

    Object.entries(request.params || {}).forEach(([key, val]) => {
      params = params.set(key.toString(), val != null ? String(val) : '');
    });

    Object.entries(authHeaders).forEach(([key, val]) => {
      headers = headers.set(key.toString(), val != null ? String(val) : '');
    });

    Object.entries(request.pathParams || {}).forEach(([key, val]) => {
      url = url.replace(`:${key}`, String(val));
    });

    const options = { headers, params };

    switch (request.method) {
      case httpMethods.GET:
        service = this.httpClient.get(url, { ...options, observe: 'response' });
        break;

      case httpMethods.POST:
        service = this.httpClient.post(url, request.data, { ...options, ...xhrOptions, observe: 'response' });
        break;

      case httpMethods.PUT:
        service = this.httpClient.put(url, request.data, { ...options, observe: 'response' });
        break;

      case httpMethods.DELETE:
        service = this.httpClient.delete(url, {
          body: request.data,
          ...options,
          ...xhrOptions,
          observe: 'response',
        });
        break;

      case httpMethods.FILE:
        const formData: FormData = new FormData();
        formData.append(
          request.fileInputName || 'file',
          request.file,
          request.fileExtension ? request.fileName + request.fileExtension : request.file.name
        );
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        service = this.httpClient.post(request.url, formData, { ...options, observe: 'response' });
        break;

      default:
        break;
    }
    return service.pipe(
      map((res: any) => {
        return res['body'] as Object;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error);
    return new Observable((observer) => {
      observer.error(error);
    });
  }
}

export const enum httpMethods {
  GET,
  POST,
  PUT,
  DELETE,
  FILE,
}

export interface IHttpRequestParams {
  url: string;
  pathParams?: object;
  method: httpMethods;
  data?: any;
  headers?: object;
  params?: object;
  file?: any;
  fileInputName?: string;
  fileName?: string;
  fileExtension?: string;
  without_auth_headers?: boolean;
  without_org_headers?: boolean;
}

