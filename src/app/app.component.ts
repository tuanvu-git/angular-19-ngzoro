import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgZoroAllModule } from './shared/ng-zoro-all.module';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NgZoroAllModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isCollapsed = false;
}
