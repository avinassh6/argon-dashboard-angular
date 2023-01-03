import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { httpMethods, HttpService } from './httpsevice.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = environment.baseUrl;
  apiEndpointObj = {
    getPatient: '/api/org-user/private/patient/:id',
    
    getMasterData: '/api/org-user/private/master-data/data/:key',

    registrationForm:'https://jsonplaceholder.typicode.com/posts/1',
    getAllRoles:'/api/auth/v1/GetAllRoles',
    getAllusers:'/api/user/v1/GetAllusers',
    adduser:'/api/user/v1/adduser',
    deleteUser:'/api/user/v1/DeleteUser',
    addCollege:'/api/CollegeRequest/v1/AddCollegeRequest',
    getAllCollage:'/api/CollegeRequest/v1/GetAllCollegeRequest',
    deleteCollage:'/api/CollegeRequest/v1/DeleteCollegeRequest',
    uploadFile: '/file/upload',
    getFile: '/file/:id',
    getAllCollageData:'/api/College/v1/GetAllCollegeDetails',
    addCollegeData:'/api/College/v1/AddCollege',
    deleteCollegeDate:'/api/College/v1/DeleteCollege',
    addcarrer: '/api/user/v1/AddOtherDetails',
    addEducation:'/api/user/v1/AddEducationDetails',
    getContactDetails: '/api/user/v1/GetOtherDetails/:id',
    getEdcuationDetails:'/api/user/v1/GetEducationDetailsById/:id',
    deleteEducationDetailsOfUser:'/api/user/v1/DelEduDetails',
    getEducationTypes:'/api/user/v1/GetEducationType',
    getEducationLevels:'/api/user/v1/GetEducationLevel',
    getEmployeeTypes:'/api/user/v1/GetEmployeeType'
  };

  constructor(private httpService: HttpService) {}

  public xhr(requestParams: IHttpRequestParams) {
    return this.httpService.xhr(requestParams);
  }

  getServiceUrl(service: string) {
    return this.baseUrl + this.apiEndpointObj[service];
  }
  
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

