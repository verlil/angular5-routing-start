import {Component, OnInit} from '@angular/core';
import {ServersService} from './servers.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: { id: number, name: string, status: string }[] = [];

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onGoToUsers() {
    // this.router.navigate(['users']);
    // .navigate doesn't know on which route you are currently in, so the line above works fine
    this.router.navigate(['users'], {relativeTo: this.route});
  }
}
