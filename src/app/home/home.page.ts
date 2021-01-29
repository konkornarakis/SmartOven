import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public menu:MenuController) {
    this.menu.swipeGesture(true);
  }

  ionViewDidEnter() {
    this.menu.swipeGesture(true);
  }
  
}
