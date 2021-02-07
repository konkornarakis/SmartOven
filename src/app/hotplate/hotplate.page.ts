import { Component, OnInit } from "@angular/core";
import { MenuController } from "@ionic/angular";

@Component({
  selector: "app-hotplate",
  templateUrl: "./hotplate.page.html",
  styleUrls: ["./hotplate.page.scss"],
})
export class HotplatePage implements OnInit {
  constructor(public menu: MenuController) {
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
      el.classList.add("ion-hide");
    }
  }

  mainToSelect() {
    if (!document.getElementById("container1").classList.contains("ion-hide")) {
      console.log("mainToSelect(), container1 doesnt contain ion-hide");
      document.getElementById("container2").classList.remove("ion-hide");
      document.getElementById("container1").classList.add("ion-hide");
      
    }
  }

  selectToMain() {
    document.getElementById("container2").classList.add("ion-hide");
    document.getElementById("container1").classList.remove("ion-hide");
  }

  selectToSet() {
    document.getElementById("container2").classList.add("ion-hide");
    document.getElementById("container3").classList.remove("ion-hide");
  }

  setToSelect() {
    document.getElementById("container3").classList.add("ion-hide");
    document.getElementById("container2").classList.remove("ion-hide");
  }

  setToWorking() {
    document.getElementById("container3").classList.add("ion-hide");
    document.getElementById("container4").classList.remove("ion-hide");
  }

  workingToMain() {
    document.getElementById("container4").classList.add("ion-hide");
    document.getElementById("container").classList.remove("ion-hide");
  }

  temperature: string = "0 C";
  status: string = "Working";
  timePassed: number = 50;
  timeLeft: number = 20;

  showDuration() {
    console.log("Duration is: " + this.duration);
  }

  duration: any;


  ngOnInit() {}
}
