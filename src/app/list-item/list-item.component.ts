import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { ListItemData } from "../domain";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: [],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {
  @Input() item: ListItemData;

  @Output() remove = new EventEmitter();

  changeDetectionCount = 0

  get GetChangeDetectionCount() {
    return this.changeDetectionCount++
  }
}
