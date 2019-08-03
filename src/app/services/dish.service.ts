import { Injectable } from '@angular/core';
import { DISHES } from '../shared/dishes';
import { Dish } from '../shared/Dish';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() {
  }

  getDishes(): Observable<Dish[]> {
    // resolve a immediate result in Promise
    // return Promise.resolve(DISHES);

    // delay 2 second to simulate a async call
    // return new Promise(resolve => (
    //     //   // simulate server latency with 2 second delay
    //     //   setTimeout(() => resolve(DISHES), 2000)
    //     // ));

    // use a observable and convert into Promise
    // return of(DISHES).pipe(delay(2000)).toPromise();

    // return observable
    return of(DISHES).pipe(delay(2000));

  }

  getDish(id: string): Observable<Dish> {
    // resolve a immediate result in Promise
    // return Promise.resolve(DISHES.filter(dish => dish.id === id)[0]);

    // delay 2 second to simulate a async call
    // return new Promise(resolve => (
    // simulate server latency with 2 second delay
    //   setTimeout(() => resolve(DISHES.filter(
    //     dish => dish.id === id)[0]), 2000)
    // ));

    // use a observable and convert into Promise
    // return of(DISHES.filter(dish => (dish.id === id))[0])
    //   .pipe(delay(2000)).toPromise();

    // return observable
    return of(DISHES.filter(dish => (dish.id === id))[0])
      .pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    // resolve a immediate result in Promise
    // return Promise.resolve(DISHES.filter(dish => dish.featured)[0]);

    // delay 2 second to simulate a async call
    // return new Promise(resolve => (
    //   // simulate server latency with 2 second delay
    //   setTimeout(() => resolve(
    //     DISHES.filter(dish => dish.featured)[0]), 2000)
    // ));

    // use a observable and convert into Promise
    // return of(DISHES.filter(dish => dish.featured)[0])
    //   .pipe(delay(2000)).toPromise();

    // return observable
    return of(DISHES.filter(dish => dish.featured)[0])
      .pipe(delay(2000));
  }
}
