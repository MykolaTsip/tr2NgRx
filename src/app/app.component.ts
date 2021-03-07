import {Component, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;
  updateAt: number;

  get disabletButton(): boolean {
    return this.counter <= 0;
  }


  decrease(): void {
    this.counter++;
    this.updateAt = Date.now();
  }

  increase(): void {
    this.counter--;
    this.updateAt = Date.now();
  }

  clear(): void {
    this.counter = 0;
    this.updateAt = Date.now();
  }

  // ngAfterViewInit(): void {
  //   this.updateAt = Date.now();
  // }
}
