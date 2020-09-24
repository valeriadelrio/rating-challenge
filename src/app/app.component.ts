import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RatesService } from './services/rates.service';
import { IRate } from './model/rate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public rate: number;
  data$: Observable<IRate[]>;
  constructor(private starService: RatesService) {}
  ngOnInit(): void {
    this.data$ = this.starService.getStar();
  }
  public rateSelected(rate: number): void {
    this.rate = rate;
  }
}
