import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from './api-serve.service';
import { httpMethods, IHttpRequestParams } from './httpsevice.service';


@Injectable({
  providedIn: 'root',
})
export class GeneralService {
   baseUrl = environment.baseUrl;

  constructor(
    private apiService: ApiService,
    private http: HttpClient
  ) {}

  adduser(goal: any) {
    const requestParams: IHttpRequestParams = {
      method: httpMethods.POST,
      url:  this.apiService.getServiceUrl('adduser'),
      data: goal.data,
    };
    return this.apiService.xhr(requestParams);
  }

  addEducation(goal: any) {
    const requestParams: IHttpRequestParams = {
      method: httpMethods.POST,
      url:  this.apiService.getServiceUrl('addEducation'),
      data: goal.data,
    };
    return this.apiService.xhr(requestParams);
  };

  addcarrer(goal: any) {
    const requestParams: IHttpRequestParams = {
      method: httpMethods.POST,
      url:  this.apiService.getServiceUrl('addcarrer'),
      data: goal.data,
    };
    return this.apiService.xhr(requestParams);
  }

  addCollege(goal: any) {
    const requestParams: IHttpRequestParams = {
      method: httpMethods.POST,
      url:  this.apiService.getServiceUrl('addCollege'),
      data: goal.data,
    };
    return this.apiService.xhr(requestParams);
  }

  addCollegeData(goal: any) {
    const requestParams: IHttpRequestParams = {
      method: httpMethods.POST,
      url:  this.apiService.getServiceUrl('addCollegeData'),
      data: goal.data,
    };
    return this.apiService.xhr(requestParams);
  }

  getTypes(param){
    const requestParams: IHttpRequestParams = {
      method: httpMethods.GET,
     url: this.apiService.getServiceUrl(param),
    };
    return this.apiService.xhr(requestParams);
  }


  getRoles(){
    const requestParams: IHttpRequestParams = {
      method: httpMethods.GET,
     url: this.apiService.getServiceUrl('getAllRoles'),
    };
    return this.apiService.xhr(requestParams);
  }
  // paginationParams = {}
  getAllusers(searchText?: string){
    const requestParams: IHttpRequestParams = {
      method: httpMethods.GET,
      url: this.apiService.getServiceUrl('getAllusers'),
      params: {
        sortBy: 'desc',
        searchText
      }
    };
    return this.apiService.xhr(requestParams);
  }

  

  getAllCollage(){
    const requestParams: IHttpRequestParams = {
      method: httpMethods.GET,
      url: this.apiService.getServiceUrl('getAllCollage'),
    };
    return this.apiService.xhr(requestParams);
  }

  getAllCollageData(){
    const requestParams: IHttpRequestParams = {
      method: httpMethods.GET,
      url: this.apiService.getServiceUrl('getAllCollageData'),
    };
    return this.apiService.xhr(requestParams);
  }

  getContactDetails(obj?, searchText?: string){
    const requestParams: IHttpRequestParams = {
      method: httpMethods.GET,
      url: this.apiService.getServiceUrl('getContactDetails'),
      // params: {
      //   sortBy: 'desc',
      //   searchText
      // },
      pathParams: {
        id: obj.UserId
      },
    };
    return this.apiService.xhr(requestParams);
  }

  getEdcuationDetails(obj?, searchText?: string){
    const requestParams: IHttpRequestParams = {
      method: httpMethods.GET,
      url: this.apiService.getServiceUrl('getEdcuationDetails'),
      // params: {
      //   sortBy: 'desc',
      //   searchText
      // },
      pathParams: {
        id: obj.UserId
      },
      //data:obj
    };
    return this.apiService.xhr(requestParams);
  }

  deleteUser(user: any) {
    const requestParams: IHttpRequestParams = {
      method: httpMethods.DELETE,
      url: this.apiService.getServiceUrl('deleteUser'),
      data: user,
    };
    return this.apiService.xhr(requestParams);
  }

  delete(user: any, param) {
    const requestParams: IHttpRequestParams = {
      method: httpMethods.DELETE,
      url: this.apiService.getServiceUrl(param),
      data: user,
    };
    return this.apiService.xhr(requestParams);
  }


  deleteEducationDetailsOfUser(user: any) {
    const requestParams: IHttpRequestParams = {
      method: httpMethods.DELETE,
      url: this.apiService.getServiceUrl('deleteEducationDetailsOfUser'),
      data: user,
    };
    return this.apiService.xhr(requestParams);
  }

  deleteCollage(user: any) {
    const requestParams: IHttpRequestParams = {
      method: httpMethods.DELETE,
      url: this.apiService.getServiceUrl('deleteCollage'),
      data: user,
    };
    return this.apiService.xhr(requestParams);
  }

  deleteCollegeDate(user: any) {
    const requestParams: IHttpRequestParams = {
      method: httpMethods.DELETE,
      url: this.apiService.getServiceUrl('deleteCollegeDate'),
      data: user,
    };
    return this.apiService.xhr(requestParams);
  }


  upload(file: File): Observable<HttpEvent<any>> {
    const url ="http://localhost:4600";
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${url}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    const url ="http://localhost:4600";
    return this.http.get(`${url}/files`);
  }
  
  
}
