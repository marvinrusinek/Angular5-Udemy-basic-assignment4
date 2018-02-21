import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private _numbers: number[];

  constructor() {
    this.numbers = [];
  }

  public onIteratorChanged(iterator: number) {
    this.numbers.push(iterator);
  }

  public get numbers(): number[] {
    return this._numbers;
  }

  public set numbers(value: number[]) {
    this._numbers = value;
  }
}
