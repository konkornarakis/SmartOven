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

  toggleDashboard() {
    let d = document.getElementById("dashboard");
    let m = document.getElementById("container");
    let c = document.getElementById("cancelBtn");
    if(d.classList.contains("ion-hide")) {
      d.classList.remove("ion-hide");
      m.classList.add("ion-hide");
      c.classList.remove("ion-hide");
    } else {
      m.classList.remove("ion-hide");
      d.classList.add("ion-hide");
      c.classList.add("ion-hide");
    }
  }
  
}
