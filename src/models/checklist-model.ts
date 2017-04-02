import {Observable} from "rxjs";
export class ChecklistModel {
  checklist: any;
  checklistObserver: any;

  constructor(public title: string, public items: any[]) {
    this.checklist = Observable.create(observer => {
      this.checklistObserver = observer;
    });
  }

  addItem(item) {
    this.items.push({
      title: item,
      checked: false
    });
    this.checklistObserver.next(true);
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
    this.checklistObserver.next(true);
  }

  renameItem(item, title) {
    let index = this.items.indexOf(item);
    if (index > -1) {
      this.items[index].title = title;
    }
    this.checklistObserver.next(true);

  }

  setTitle(title) {
    this.title = title;
    this.checklistObserver.next(true);
  }

  toggleItem(item) {
    item.checked = !item.checked;
    this.checklistObserver.next(true);
  }

  checklistUpdates(): Observable<any> {
    return this.checklist;
  }

}
