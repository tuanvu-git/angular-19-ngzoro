import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RandomUserService } from '@app/@core/services';
import { RootStateService } from '@app/@core/state-manegement/root.state..service';
import { NgZoroAllModule } from '@app/shared/ng-zoro-all.module';
import { map } from 'rxjs';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  standalone: true,
  imports: [NgZoroAllModule, AsyncPipe],
})
export class CityComponent implements OnInit {
  constructor(
    private _randomUserService: RandomUserService,
    private _rootStateService: RootStateService
  ) {}

  loading$ = this._rootStateService.currentState.pipe(map((s) => s.loading));
  ngOnInit() {
    this._randomUserService.find().subscribe((s) => {
      console.log(s);
    });
    this.loading$.subscribe(console.log)
  }

  onClickPrimary() {
    this._rootStateService.updateState({
      loading: true,
    });
    setTimeout(() => {
      this._rootStateService.updateState({
        loading: false,
      });
    }, 3000);
  }
}
