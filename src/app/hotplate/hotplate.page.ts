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

  toggleClassTest() {
    let el = document.getElementById("container2");
    if (el.classList.contains("ion-hide")) {
      el.classList.remove("ion-hide");
    } else {
      el.classList.add("ion-hide")
    }
  }

  ngOnInit() {
  }

}
