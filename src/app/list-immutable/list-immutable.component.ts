import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { ListItemData } from "../domain";
import { List } from "immutable";

@Component({
  selector: 'app-list-immutable',
  templateUrl: './list-immutable.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListImmutableComponent {

  @Input() items: List<ListItemData>;
  @Output() removeItem = new EventEmitter();
}
