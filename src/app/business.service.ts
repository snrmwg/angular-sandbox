import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject, concat, interval, of } from 'rxjs';
import { finalize, map, startWith, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BusinessService {

  public config = {
    autoOptions: { fail: false }
  };

  private source$ = new Subject<{
    value: string;
  }>();

  readonly state$ = this.source$.pipe(
    startWith({ value: 'initial' }),
    tap(o => console.log('state$', o)),
    map(o => o.value),
  );

  constructor(private http: HttpClient) {
    console.log('BusinessService.constructor()');
  }

  stateAuto$() {
    return concat(
      this.callApi$(this.config.autoOptions)
        .pipe(
          tap(o => console.log('stateAuto$ callApi$', o)),
          map(o => JSON.stringify(o))
        ),
      interval(5_000)
    ).pipe(
      tap(o => console.log('stateAuto$', o)),
      finalize(() => console.log('stateAuto$ finalize'))
    )
  };

  setAutoOptions(options: { fail: boolean; }) {
    this.config.autoOptions = options;
  }

  callApi$(options: { fail: boolean; }) {
    const params = new HttpParams()
      .set('fail', options.fail.toString())

    return this.http.get('http://localhost:3000', { params });
  }

  update(options: { fail: boolean; } = { fail: false }) {
    this.callApi$(options).subscribe(
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
