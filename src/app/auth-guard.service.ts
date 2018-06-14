import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated()
      .then(
        (authenticated: boolean) => {
          if (authenticated) {
            return true;
          } else {
            this.router.navigate(['/']);
          }
        }
      );
  }

  // Объект Promise (обещание) используется для отложенных и асинхронных вычислений.
  // Promise может находиться в трёх состояниях:
  //
  // ожидание (pending): начальное состояние, не выполнено и не отклонено.
  // выполнено (fulfilled): операция завершена успешно.
  // отклонено (rejected): операция завершена с ошибкой.
}
