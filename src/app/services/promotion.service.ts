import { Injectable } from '@angular/core';
import { Promotion } from '../shared/Promotion';
import { PROMOTIONS } from '../shared/promotions';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() {
  }

  getPromotions(): Observable<Promotion[]> {
    // resolve a promise immediately
    // return Promise.resolve(PROMOTIONS);

    // 2 second delay to simulate async call
    // return new Promise(resolve => {
    //   // simulate two second delay
    //   setTimeout(() => resolve(PROMOTIONS), 2000);
    // });

    // return Promise from an observable
    // return of(PROMOTIONS).pipe(delay(2000)).toPromise();

    // return observable
    return of(PROMOTIONS).pipe(delay(2000));

  }

  getPromotion(id: string): Observable<Promotion> {
    // resolve a promise immediately
    // return Promise.resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]);

    // 2 second delay to simulate async call
    // return new Promise(resolve => {
    //   // simulate two second delay
    //   setTimeout(() =>
    //       resolve(PROMOTIONS.filter(
    //         (promo) => (promo.id === id))[0]),
    //     2000);
    // });

    // return Promise from an observable
    // return of(PROMOTIONS.filter(
    //   (promo) => (promo.id === id))[0]).pipe(delay(2000)).toPromise();

    // return observable
    return of(PROMOTIONS.filter(
      (promo) => (promo.id === id))[0]).pipe(delay(2000));

  }

  getFeaturedPromotion(): Observable<Promotion> {
    // resolve a promise immediately
    // return Promise.resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]);

    // 2 second delay to simulate async call
    // return new Promise(resolve => {
    //   // simulate two second delay
    //   setTimeout(() =>
    //       resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]),
    //     2000);
    // });

    // return Promise from an observable
    // return of(PROMOTIONS.filter(
    //   (promo) => (promo.featured))[0]).pipe(delay(2000)).toPromise();

    // return observable
    return of(PROMOTIONS.filter(
      (promo) => (promo.featured))[0]).pipe(delay(2000));
  }
}
