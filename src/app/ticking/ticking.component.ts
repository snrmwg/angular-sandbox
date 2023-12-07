import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-ticking',
  templateUrl: './ticking.component.html',
  styleUrls: ['./ticking.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TickingComponent implements OnInit, OnChanges, OnDestroy {

  changeDetectionCount = 0

  count$ = interval(1000)

  counter2 = 0
  timer = undefined

  constructor(readonly cd: ChangeDetectorRef) { }

  get GetChangeDetectionCount() {
    return this.changeDetectionCount++
  }

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.counter2++
      if (this.counter2 % 5 === 0) {
        this.cd.detectChanges()
      }
    }, 1000)

  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
    this.timer = undefined;
  }
}
