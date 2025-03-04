// quote.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IRootState } from '../interfaces/root-state';

@Injectable({
  providedIn: 'root',
})
export class RootStateService {
  constructor() {}

  // declare and initialize the quote property
  // which will be a BehaviorSubject
  private _state$ = new BehaviorSubject<IRootState>({
    // init state here,
    loading: false,
    userInfo: null,
  });

  // expose the BehaviorSubject as an Observable
  currentState = this._state$.asObservable();

  // function to update the value of the BehaviorSubject
  updateState(newState: Partial<IRootState>) {
    this._state$.next({
      ...this._state$.getValue(),
      ...newState,
    });
  }
}
