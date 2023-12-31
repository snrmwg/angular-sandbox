import { Component } from '@angular/core';
import { ListItemData } from '../domain';
import { List } from 'immutable';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component  {
  tickingVisible = false

  name = 'unknown'

  private nextNameIndex = 0

  list1: ListItemData[] = [{ name: 'a', someValue: 0 }, { name: 'b', someValue: 0 }, { name: 'c', someValue: 0 }]
  list1Immutable = List<ListItemData>(this.list1)

  nextListId = 100

  toggleTicking() {
    this.tickingVisible = !this.tickingVisible
  }

  changeName() {
    this.name = names[this.nextNameIndex]
    this.nextNameIndex = (this.nextNameIndex + 1) % names.length
  }

  addListItem(idx?: number) {
    const newItem = { name: 'x' + this.nextListId++, someValue: 0 };
    if (idx === 0) {
      this.list1.splice(idx, 0, newItem)
    } else {
      this.list1.push(newItem)
    }
  }

  removeListItem(removedItem: any) {
    this.list1 = this.list1.filter(item => item !== removedItem);
  }

  updateItem() {
    if (this.list1.length) {
      this.list1[0].someValue++
    }
  }

  addListItemImmutable(idx?: number) {
    const newItem = { name: 'x' + this.nextListId++, someValue: 0 };
    if (idx === 0) {
      this.list1Immutable = this.list1Immutable.unshift(newItem)
    } else {
      this.list1Immutable = this.list1Immutable.push(newItem)
    }
  }

  removeListItemImmutable(removedItem: any) {
    this.list1Immutable = this.list1Immutable.filter(item => item !== removedItem).toList();
  }

  updateItemImmutable() {
    if (!this.list1Immutable.isEmpty()) {
      this.list1Immutable = this.list1Immutable
        .updateIn([0], (value: ListItemData) => {
          return Object.assign({}, value, { someValue: value.someValue + 1 });
        })
    }
  }

}

const names = ['Peter', 'Paul', 'Mary']
