import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgZoroAllModule } from '@app/shared/ng-zoro-all.module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [RouterOutlet, NgZoroAllModule, RouterModule],
})
export class DashboardComponent {
  isCollapsed = true;
  constructor() {}
}
