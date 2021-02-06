import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { MenuController } from "@ionic/angular";
import { PickerOptions } from "@ionic/core";
import { PickerController } from "@ionic/angular";

@Component({
  selector: "app-oven",
  templateUrl: "./oven.page.html",
  styleUrls: ["./oven.page.scss"],
})
export class OvenPage implements OnInit {
  constructor(
    public menu: MenuController,
    private pickerController: PickerController
  ) {
    this.menu.swipeGesture(true);
  }

  ionViewDidEnter() {
    this.menu.swipeGesture(true);
  }

  //
  showStart() {
    console.log("showStart() called");
    document.getElementById("start").style.display = "block";
  }

  hideStart() {
    console.log("hideStart() called");
    document.getElementById("start").style.display = "none";
  }

  showSet() {
    document.getElementById("set").style.display = "block";
  }

  hideSet() {
    document.getElementById("set").style.display = "none";
  }

  //

  stateModelist: boolean = false;
  toggleModes() {
    this.stateModelist = !this.stateModelist;
    if (this.stateModelist) {
      document.getElementById("modelist").style.display = "block";
      document.getElementById("showModesBtn").innerHTML = "Hide";
    } else {
      document.getElementById("modelist").style.display = "none";
      document.getElementById("showModesBtn").innerHTML = "Show";
    }
  }

  showModes() {
    console.log("showModes() called");
    document.getElementById("modelist").style.display = "block";
    document.getElementById("mdoelistBtn").innerHTML =
      "<ion-button id='hideModesBtn' (click)='hideModes()' size='small'>Hide</ion-button>";
  }

  hideModes() {
    console.log("hideModes() called");
    document.getElementById("modelist").style.display = "none";
    document.getElementById("mdoelistBtn").innerHTML =
      "<ion-button id='showModesBtn' (click)='showModes()' size='small'>Show</ion-button>";
  }

  //

  statePicker: boolean = false;
  togglePicker() {
    this.statePicker = !this.statePicker;
    if (this.statePicker) {
      document.getElementById("datetimePicker").style.display = "block";
    } else {
      document.getElementById("datetimePicker").style.display = "none";
    }
  }

  showPicker() {
    document.getElementById("datetimePicker").style.display = "block";
  }

  hidePicker() {
    document.getElementById("datetimePicker").style.display = "none";
  }

  //
  showWorking() {
    document.getElementById("working").style.display = "block";
  }

  hideWorking() {
    document.getElementById("working").style.display = "none";
  }

  //
  start() {
    console.log("Start()");
    this.hideStart();
    this.showSet();
  }

  set() {
    console.log("Set()");
    this.hideSet();
    this.showWorking();
    this.startTimer();
    console.log("Timer started");
    this.startCountdown();
    console.log("Countdown started");
  }

  cancelSet() {
    console.log("cancelSet()");
    location.reload();
    this.hideSet();
    this.showStart();
  }

  showDuration() {
    console.log("Duration is: " + this.duration);
  }

  duration: any;

  //

  gadgets: any[] = [
    ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "59"],
  ];
  numColumns: number = 2; // number of columns to display on picker over lay
  numOptions: number = 5; // number of items (or rows) to display on picker over lay
  pickedDuration: any;

  async showPicker2() {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Ok",
          handler: (value: any) => {
            // console.log(value);
            this.pickedDuration = value;
            this.pickedDurationExplained(this.pickedDuration);
          },
        },
      ],
      columns: this.getColumns(),
    };
    let picker = await this.pickerController.create(options);
    picker.present();
  }

  getColumns() {
    let columns = [];
    for (let i = 0; i < this.numColumns; i++) {
      columns.push({
        name: `col -${i}`,
        options: this.getColumnOptions(i),
      });
    }
    return columns;
  }
  getColumnOptions(columIndex: number) {
    let options = [];
    for (let i = 0; i < this.numOptions; i++) {
      options.push({
        text: this.gadgets[columIndex][i % this.numOptions],
        value: i,
      });
    }
    return options;
  }

  pickedDurationExplained(pickedDuration) {
    console.log(
      "Hours: " +
        pickedDuration["col -0"].text +
        ". Minutes: " +
        pickedDuration["col -1"].text
    );
  }

  timeLeft: number = 2;
  intervalCountdown;

  startCountdown() {
    this.intervalCountdown;
    this.intervalCountdown = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      }
      // else {
      //   this.timeLeft = 2;
      // }
    }, 1000);
  }

  pauseCountdown() {
    clearInterval(this.intervalCountdown);
  }

  resetCountdown() {}

  timePassed: number = 0;
  intervalTimer;

  startTimer() {
    this.intervalTimer;
    this.intervalTimer = setInterval(() => {
      this.timePassed++;
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.intervalTimer);
  }

  resetTimer() {
    this.timePassed = 0;
  }

  //
  ngOnInit() {}
}
