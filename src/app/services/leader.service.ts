import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { DISHES } from '../shared/dishes';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() {
  }

  getLeaders(): Observable<Leader[]> {
    // resolve a promise immediately
    // return Promise.resolve(LEADERS);

    // do 2 second delay to simulate a async call
    // return new Promise(resolve => {
    //   // simulate 2 second delay
    //   setTimeout(() => resolve(LEADERS), 2000);
    // });

    // return a promise from observable
    // return of(LEADERS).pipe(delay(2000)).toPromise();

    // simply observable directly
    return of(LEADERS).pipe(delay(2000));

  }

  getLeader(id: string): Observable<Leader> {
    // resolve a promise immediately
    // return Promise.resolve(LEADERS.filter((leader) => (leader.id === id))[0]);

    // do 2 second delay to simulate a async call
    // return new Promise(resolve => {
    //   // simulate 2 second delay
    //   setTimeout(() => resolve(LEADERS.filter(
    //     (leader) => (leader.id === id))[0]), 2000);
    // });

    // return a promise from observable
    // return of(LEADERS.filter(
    //   (leader) => (leader.id === id))[0]).pipe(delay(2000)).toPromise();

    // simply observable directly
    return of(LEADERS.filter(
      (leader) => (leader.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedLeader(): Observable<Leader> {
    // resolve a promise immediately
    // return Promise.resolve(LEADERS.filter(leader => leader.featured)[0]);

    // do 2 second delay to simulate a async call
    // return new Promise(resolve => {
    //   // simulate 2 second delay
    //   setTimeout(() => resolve(LEADERS.filter(
    //     leader => leader.featured)[0]), 2000);
    // });

    // return a promise from observable
    // return of(LEADERS.filter(leader => leader.featured)[0]).pipe(delay(2000)).toPromise();

    // simply observable directly
    return of(LEADERS.filter(leader => leader.featured)[0]).pipe(delay(2000));

  }
}
