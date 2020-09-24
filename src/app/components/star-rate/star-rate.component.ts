import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { IRate } from 'src/app/model/rate';

@Component({
  selector: 'app-star-rate',
  templateUrl: './star-rate.component.html',
  styleUrls: ['./star-rate.component.scss']
})
export class StarRateComponent{
  @Output() rateSelected: EventEmitter<number> = new EventEmitter<number>();
  @Input() readonly = false;
  @Input() message: string = null;
  public rates: number[] = [1, 2, 3, 4, 5];
  @Input() rate: number;

  constructor() {}

  public checkPrevious(i: number): void {
    if (!this.readonly) {
      this.rate = i;
      this.rateSelected.emit(this.rate);
    }
  }

}
