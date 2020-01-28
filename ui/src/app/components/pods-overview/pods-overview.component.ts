import { Component, OnInit, Input } from '@angular/core';
import { Pod } from 'src/app/models/pod';
import { PodService } from 'src/services/pod.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import Plyr from 'plyr';

@Component({
  selector: 'app-pods-overview',
  templateUrl: './pods-overview.component.html',
  styleUrls: ['./pods-overview.component.scss']
})
export class PodsOverviewComponent implements OnInit {
  public pods: Observable<Pod[]>;
  constructor(private readonly podService: PodService, private readonly authService: AuthService) {}

  ngOnInit() {
    this.getAllPodsForUser();
  }

  public getAllPodsForUser() {
    const userId = this.authService.userData.uid;

    this.pods = this.podService.get(userId).pipe(tap(() => this.registerPlyr()));
  }

  private registerPlyr() {
    setTimeout(() => Array.from(document.querySelectorAll('.audio-player')).map(p => new Plyr(p)));
  }
}
