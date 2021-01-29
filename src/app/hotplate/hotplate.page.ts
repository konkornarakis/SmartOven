import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-hotplate',
  templateUrl: './hotplate.page.html',
  styleUrls: ['./hotplate.page.scss'],
})
export class HotplatePage implements OnInit {

  constructor(public menu:MenuController) { 
    this.menu.swipeGesture(true);
  }

  ionViewDidEnter() {
    this.menu.swipeGesture(true);
  }

  ngOnInit() {
  }

}
