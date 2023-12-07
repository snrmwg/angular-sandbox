import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ListItemData } from "../domain";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: [],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {

  @Input() items: ListItemData[] = [];
  @Output() removeItem = new EventEmitter();
}
