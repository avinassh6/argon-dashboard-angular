import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { RegistrationFormComponent } from 'src/app/pages/registration-form/registration-form.component';
import { CollageComponent } from 'src/app/pages/collage/collage.component';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { ProfileLayoutComponent } from '../profile-layout/profile-layout.component';
import { AuthGuard } from 'src/app/service/authGuard';
import { CollegeDataComponent } from 'src/app/pages/collegeData/collegeData/collegeData.component';

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
  { path: "user-profile", component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: "tables", component: TablesComponent,  canActivate: [AuthGuard] },
  { path: "icons", component: IconsComponent, canActivate: [AuthGuard] },
  { path: "maps", component: MapsComponent, canActivate: [AuthGuard] },
  { path: "registration", component: RegistrationFormComponent, canActivate: [AuthGuard] },
  { path: "collegeRequest", component: CollageComponent, canActivate: [AuthGuard] },
  { path: "college", component: CollegeDataComponent, canActivate: [AuthGuard] },
  {
    path: 'profile',
    component: ProfileLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/profile-layout/profile-layout.module').then(m => m.ProfileLayoutModule)
      }
    ],
    canActivate: [AuthGuard],
  },
];
