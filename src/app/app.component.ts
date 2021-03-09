import {Component, AfterViewInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {clear, countSelector, decrease, increase, updatedAt} from './reducers/counter';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count$ = this.store.select(countSelector);
  validCount$ = this.count$.pipe(
    map(
      value => value <= 0
    )
  );
  updatedAt$ = this.store.select(updatedAt);

  constructor(private store: Store) {
  }

  decrease(): void {
    this.store.dispatch(decrease());
  }

  increase(): void {
    this.store.dispatch(increase());
  }

  clear(): void {
    this.store.dispatch(clear());
  }
}
