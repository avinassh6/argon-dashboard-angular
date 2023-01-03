import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, PathLocationStrategy, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './service/authGuard';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  },
   {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () => import('src/app/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }
    ],
    canActivate: [AuthGuard],
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('src/app/layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ]
  }, {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      //useHash: true
    })
  ],
  exports: [
  ],
  providers: [
    AuthGuard,
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ]
})
export class AppRoutingModule { }
