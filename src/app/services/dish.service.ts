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
    return of(DISHES).pipe(delay(2000));

  }

  getDish(id: string): Observable<Dish> {
    return of(DISHES.filter(dish => (dish.id === id))[0])
      .pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter(dish => dish.featured)[0])
      .pipe(delay(2000));
  }

  // return all dish ids array using an observable
  getDishIds(): Observable<string[] | any> {
    return of(DISHES.map(dish => dish.id));
  }
}
