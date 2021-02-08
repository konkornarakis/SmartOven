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

  selectToWorking() {
    document.getElementById("container2").classList.add("ion-hide");
    document.getElementById("container4").classList.remove("ion-hide");
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
    document.getElementById("container1").classList.remove("ion-hide");
  }

  workingToSelect() {
    document.getElementById("container4").classList.add("ion-hide");
    document.getElementById("container2").classList.remove("ion-hide");
  }

  transit(s: number) {
    if (s === 1) {
      if (this.hotplateState1 === true) this.selectToWorking();
      else this.selectToSet();
    } else if (s === 2) {
      if (this.hotplateState2 === true) this.selectToWorking();
      else this.selectToSet();
    } else if (s === 3) {
      if (this.hotplateState3 === true) this.selectToWorking();
      else this.selectToSet();
    } else if (s === 4) {
      if (this.hotplateState4 === true) this.selectToWorking();
      else this.selectToSet();
    }
  }

  temperature: string = "0 C";
  status: string = "Working";
  timePassed: number = 50;
  timeLeft: number = 20;

  showDuration() {
    console.log("Duration is: " + this.duration);
  }

  duration: any;

  selectedHotplate: number = 0;

  selectHotplate(hotplate: number) {
    this.selectedHotplate = hotplate;
    console.log("Selected hotplate: " + this.selectedHotplate);
  }

  hotplateState1: boolean = false;
  hotplateState2: boolean = false;
  hotplateState3: boolean = false;
  hotplateState4: boolean = false;

  changeState(state: boolean) {
    if (this.selectedHotplate === 1) {
      this.hotplateState1 = state;
      if (state === true) {
        document.getElementById("hotplate1").style.backgroundColor = "red";
      } else {
        document.getElementById("hotplate1").style.backgroundColor = "var(--ion-color-primary)";
      }
    }
    if (this.selectedHotplate === 2) {
      this.hotplateState2 = state;
      if (state === true) {
        document.getElementById("hotplate2").style.backgroundColor = "red";
      } else {
        document.getElementById("hotplate2").style.backgroundColor = "var(--ion-color-primary)";
      }
    }
    if (this.selectedHotplate === 3) {
      this.hotplateState3 = state;
      if (state === true) {
        document.getElementById("hotplate3").style.backgroundColor = "red";
      } else {
        document.getElementById("hotplate3").style.backgroundColor = "var(--ion-color-primary)";
      }
    }
    if (this.selectedHotplate === 4) {
      this.hotplateState4 = state;
      if (state === true) {
        document.getElementById("hotplate4").style.backgroundColor = "red";
      } else {
          document.getElementById("hotplate4").style.backgroundColor = "var(--ion-color-primary)";
      }
    }
    console.log("State changed");
  }

  ngOnInit() {}
}
