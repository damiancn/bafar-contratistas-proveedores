import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanActivate {

  constructor(
    // private authenticationService: AuthenticationService,
    private router: Router,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean |
      UrlTree> |
    Promise<boolean |
      UrlTree> |
    boolean |
    UrlTree {
    return this.estaAutorizado(route);
  }

  private estaAutorizado(route: ActivatedRouteSnapshot): boolean {
    const roleUsuario: any = localStorage.getItem('role');
    const roles = route.data['role'][0];
    const roleMatches = roles!.includes(roleUsuario);

    // console.error('roleMatches: ', roleMatches);
    // console.error('roleUsuario: ', roleUsuario);

    if (roleMatches && roleUsuario == 'seguridad-industrial') {
      // console.warn('Se redirige a /')
      // this.router.navigateByUrl(`/`);
      // console.warn('Es seguridad-industrial y debe de refirigir a /dashboard');
      return true;
    } else {
      return false;
    }
  }

}
