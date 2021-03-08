import {Component, AfterViewInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {clear, countSelector, decrease, increase} from './reducers/counter';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  updateAt: number;
  storeCount$ = this.store.select(countSelector);
  disableCount$ = this.storeCount$.pipe(
    map(
      value => value <= 0
    )
  );
  constructor(private store: Store) {
  }

  decrease(): void {
    this.store.dispatch(decrease());
    this.updateAt = Date.now();
  }

  increase(): void {
    this.store.dispatch(increase());
    this.updateAt = Date.now();
  }

  clear(): void {
    this.store.dispatch(clear());
    this.updateAt = Date.now();
  }
}
