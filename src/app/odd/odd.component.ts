import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent {
  @Input('number')
  private myNumber: number;

  constructor() {}

  public get number(): number {
    return this.myNumber;
  }

  public set number(value: number) {
    this.myNumber = value;
  }
}
