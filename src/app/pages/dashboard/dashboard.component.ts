import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NgZoroAllModule } from '@app/shared/ng-zoro-all.module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  styleUrl: './dashboard.component.scss',
  imports: [RouterOutlet, NgZoroAllModule, RouterModule, RouterLink],
})
export class DashboardComponent {
  isCollapsed = true;
  constructor() {}
}
