import {ActivatedRoute, Params, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';

import {ServersService} from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    const serverId = +this.route.snapshot.params['id'];
    // this 'plus' is necessary, because after parsing the route we got a string '1'
    // but in our app the 'id' value is a number

    this.server = this.serversService.getServer(serverId);

    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    );
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
