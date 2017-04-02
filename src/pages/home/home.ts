import {Component} from '@angular/core';

import {AlertController, Keyboard, NavController, Platform} from 'ionic-angular';
import {ChecklistModel} from "../../models/checklist-model";
import {Data} from "../../providers/data";
import {ChecklistPage} from "../checklist/checklist";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  checklists: ChecklistModel[] = [];

  constructor(public navCtrl: NavController, public dataService: Data, public alertCtrl: AlertController, public platform: Platform, keyboard: Keyboard) {

  }

  addChecklist(): void {
    let prompt = this.alertCtrl.create({
      title: 'New checklist',
      message: 'Enter the name of your new checklist below:',
      inputs: [{
        name: 'name'
      }],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            let newchecklist = new ChecklistModel(data.name, []);
            this.checklists.push(newchecklist);
            newchecklist.checklistUpdates().subscribe(_ => {
              this.save();
            });
            this.save();
          }
        }
      ]
    });

    prompt.present();
  }

  renameChecklist(checklist): void {
    let prompt = this.alertCtrl.create({
      title: 'Rename checklist',
      message: 'Enter the name of your new checklist below:',
      inputs: [{
        name: 'name'
      }],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            let index = this.checklists.indexOf(checklist);
            if (index > -1) {
              this.checklists[index].setTitle(data.name);
              this.save();
            }
          }
        }
      ]
    });

    prompt.present();
  }

  removeChecklist(checklist): void {
    let index = this.checklists.indexOf(checklist);
    if (index > -1) {
      this.checklists.splice(index, 1);
      this.save();
    }
  }

  viewChecklist(checklist): void {
    this.navCtrl.push(ChecklistPage, {
      checklist: checklist
    });
  }

  save(): void {

  }
}
