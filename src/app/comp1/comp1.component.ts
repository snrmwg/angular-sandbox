import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Comp1Component implements OnChanges {

  @Input() name = 'unknown'

  changeDetectionCount = 0
  constructor(readonly cd: ChangeDetectorRef) { }

  get GetChangeDetectionCount() {
    return this.changeDetectionCount++
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.cd.detectChanges()
  }

}
