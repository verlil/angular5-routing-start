// this service will run each time we reRender the route
// this resolver  will load our data in advance
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {ServersService} from '../servers.service';
import {Injectable} from '@angular/core';

interface Server {
  id: number;
  name: string;
  status: string;
}

@Injectable()
export class ServerResolver implements Resolve<{ id: number, name: string, status: string }> {
  constructor(private serverService: ServersService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
    return this.serverService.getServer(+route.params['id']);
  }
}
