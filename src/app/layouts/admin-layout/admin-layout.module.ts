import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationFormComponent} from './../../pages/registration-form/registration-form.component';
import  { RegisrationTableComponent } from  './../../pages/registration-form/regisration-table/regisration-table.component';
import { TableNorecordsFoundComponent } from 'src/app/pages/table-norecords-found/table-norecords-found.component';
import { LoadingspinnerComponent } from 'src/app/pages/loadingspinner/loadingspinner.component';
import { ConfirmDialogComponent } from 'src/app/pages/confirm-dialog/confirm-dialog.component';
import { CollageComponent } from 'src/app/pages/collage/collage.component';

import { CollegeRequestComponent } from 'src/app/pages/collage/CollegeRequest/CollegeRequest.component';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { CollegeFormComponent } from 'src/app/pages/collegeForm/collegeForm.component';
import { CollegegridComponent } from 'src/app/pages/collage/collegegrid/collegegrid.component';
import { SearchtextComponent } from 'src/app/pages/searchtext/searchtext.component';
import { CollegeDataComponent } from 'src/app/pages/collegeData/collegeData/collegeData.component';
import { CollegelistComponent } from 'src/app/pages/collegeData/collegelist/collegelist.component';
import { CreateCollegeComponent } from 'src/app/pages/collegeData/createCollege/createCollege.component';
//import { SharedModule } from 'src/app/module/shared/shared.module';





@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    //SharedModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    RegistrationFormComponent,
    RegisrationTableComponent,
    TableNorecordsFoundComponent,
    LoadingspinnerComponent,
    ConfirmDialogComponent,
    CollageComponent,
    CollegeFormComponent,
    CollegeRequestComponent,
    ProfileComponent,
    CollegegridComponent,
    SearchtextComponent,
    CollegeDataComponent,
    CollegelistComponent,
    CreateCollegeComponent
  
  ],
  providers: [],
})

export class AdminLayoutModule {}
