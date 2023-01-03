import { Routes } from '@angular/router';
import { AlumniComponent } from 'src/app/pages/profile/contact/alumni/alumni.component';
import { CarrerComponent } from 'src/app/pages/profile/contact/carrer/carrer.component';
import { ChapterLinksComponent } from 'src/app/pages/profile/contact/chapterLinks/chapterLinks.component';
import { ContactinfoComponent } from 'src/app/pages/profile/contact/contactinfo.component';
import { EducationComponent } from 'src/app/pages/profile/contact/Education/Education.component';
import { ProfessionalComponent } from 'src/app/pages/profile/contact/professional/professional.component';
import { PersonalinfoComponent } from 'src/app/pages/profile/personalinfo/personalinfo.component';



export const ProfileLayoutRoutes: Routes = [
    {
        path: "contactinfo",
        component: ContactinfoComponent,
      },
      {
        path: "",
        component: PersonalinfoComponent,
        redirectTo:'personalinfo'
      },
      {
        path: "personalinfo",
        component: PersonalinfoComponent,
      },
      {
        path: "personalinfodetails",
        component: PersonalinfoComponent,
      },
      {
        path: "educationinfo",
        component: EducationComponent,
      },
      {
        path: "carrerinfo",
        component: CarrerComponent,
      },
      {
        path: "chapterLinksInfo",
        component: ChapterLinksComponent,
      },
      {
        path: "alumniInfo",
        component: AlumniComponent,
      },
      {
        path: "professionalInfo",
        component: ProfessionalComponent,
      }
    ];
