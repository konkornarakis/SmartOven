import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-hotplateset',
  templateUrl: './hotplateset.page.html',
  styleUrls: ['./hotplateset.page.scss'],
})
export class HotplatesetPage implements OnInit {

  constructor(public menu: MenuController) {
    this.menu.swipeGesture(false);
  }

  ngOnInit() {
  }

}
