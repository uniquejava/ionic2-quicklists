import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';

/*
  Generated class for the Checklist page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-checklist',
  templateUrl: 'checklist.html'
})
export class ChecklistPage {
  checklist: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.checklist = navParams.get('checklist');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChecklistPage');
  }

  addItem(): void {
    let prompt = this.alertCtrl.create({
      title: 'New Item',
      message: 'Enter the name of the task for this checklist below:',
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
            this.checklist.addItem(data.name);
          }
        }
      ]
    });

    prompt.present();
  }

  toggleItem(item): void {
    this.checklist.toggleItem(item);
  }

  removeItem(item): void {
    this.checklist.removeItem(item);
  }

  renameItem(item): void {
    let prompt = this.alertCtrl.create({
      title: 'Rename Item',
      message: 'Enter the new name of the task for this checklist below:',
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
            this.checklist.renameItem(item, data.name);
          }
        }
      ]
    });

    prompt.present();
  }

  uncheckItems(): void {
    this.checklist.items.forEach(item => {
      if(item.checked) {
        this.checklist.toggleItem(item);
      }
    })
  }
}
