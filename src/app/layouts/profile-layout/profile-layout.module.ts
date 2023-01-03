import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileLayoutComponent } from './profile-layout.component';
import { ProfileLayoutRoutes } from './profile-layout.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { AlumniComponent } from 'src/app/pages/profile/contact/alumni/alumni.component';
import { CarrerComponent } from 'src/app/pages/profile/contact/carrer/carrer.component';
import { ChapterLinksComponent } from 'src/app/pages/profile/contact/chapterLinks/chapterLinks.component';
import { ContactinfoComponent } from 'src/app/pages/profile/contact/contactinfo.component';
import { EducationComponent } from 'src/app/pages/profile/contact/Education/Education.component';
import { ProfessionalComponent } from 'src/app/pages/profile/contact/professional/professional.component';
import { PersonalinfoComponent } from 'src/app/pages/profile/personalinfo/personalinfo.component';
import { UploadimagesComponent } from 'src/app/pages/uploadimages/uploadimages.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProfileLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
  ],
  declarations: [
    ProfileLayoutComponent,
    CarrerComponent,
    ChapterLinksComponent,
    AlumniComponent,
    ContactinfoComponent,
    EducationComponent,
    ProfessionalComponent,
    PersonalinfoComponent,
    UploadimagesComponent,
  ]
})
export class ProfileLayoutModule { }
