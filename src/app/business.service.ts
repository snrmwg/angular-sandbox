import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BusinessService {
  private source$ = new Subject<{
    value: string;
  }>();

  readonly state$ = this.source$.pipe(
    startWith({ value: 'initial' }),
    tap(o => console.log('state$', o)),
    map(o => o.value),
  );

  constructor(private http: HttpClient) {
  }

  update(options: { fail: boolean; } = { fail: false }) {
    const params = new HttpParams()
      .set('fail', options.fail.toString())

    this.http.get('http://localhost:3000', { params }).subscribe(
      (res) => {
        console.info('res', res);
        this.source$.next({
          value: JSON.stringify(res),
        });
      },
      (err) => {
        console.error('update REST call failed', err);
      }
    );
  }
}
