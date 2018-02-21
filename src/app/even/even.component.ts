import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent {
  @Input('number')
  private myNumber: number;

  constructor() { }

  public get number(): number {
    return this.myNumber;
  }

  public set number(value: number) {
    this.myNumber = value;
  }
}
