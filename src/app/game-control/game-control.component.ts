import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output('iteratorChanged')
  private myIteratorChangedEvent: EventEmitter<number>;
  private myIteratorIntervalRef: number;
  private myIterator: number;

  constructor() {
    this.myIteratorChangedEvent = new EventEmitter<number>();
    this.myIterator = 0;
  }

  private get iteratorIntervalRef(): number {
    return this.myIteratorIntervalRef;
  }

  public get iteratorChangedEvent(): EventEmitter<number> {
    return this.myIteratorChangedEvent;
  }

  private get iterator(): number {
    return this.myIterator;
  }

  public set iteratorChangedEvent(value: EventEmitter<number>) {
    this.myIteratorChangedEvent = value;
  }

  private set iteratorIntervalRef(value: number) {
    this.myIteratorIntervalRef = value;
  }

  private set iterator(value: number) {
    this.myIterator = value;
  }

  private startInterval() {
    const $self = this;
    this.myIteratorIntervalRef = window.setInterval(() => $self.myIteratorChangedEvent.emit($self.getNextIterator()), 1000);
  }

  private clearInterval() {
    window.clearInterval(this.myIteratorIntervalRef);
  }

  private getNextIterator(): number {
    return this.myIterator++;
  }

  public onStartGameClicked() {
    this.startInterval();
  }

  public onStopGameClicked() {
    this.clearInterval();
  }
}
