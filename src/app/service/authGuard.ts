import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree
} from "@angular/router";
import { AuthserviceService } from "./authservice.service";

  
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private authserviceService: AuthserviceService,
        private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Promise<boolean> {
        var isAuthenticated = this.authserviceService.getAuthStatus();
        if (!isAuthenticated) {
            this.router.navigate(['auth/login']);
        }
        return isAuthenticated;
    }
}