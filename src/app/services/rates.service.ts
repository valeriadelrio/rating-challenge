import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IRate } from '../model/rate';
import { rates } from './rates.mock';

@Injectable({
  providedIn: 'root'
})
export class RatesService {

  constructor() { }

  public getStar(): Observable<IRate[]> {
    return of(rates);
  }
}
