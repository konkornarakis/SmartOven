import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-oven',
  templateUrl: './oven.page.html',
  styleUrls: ['./oven.page.scss'],
})

export class OvenPage implements OnInit {

  constructor(public menu:MenuController) { 
    this.menu.swipeGesture(true);
  }

  ionViewDidEnter() {
    this.menu.swipeGesture(true);
  };

  //
  showStart() {
    console.log("showStart() called");
    document.getElementById('start').style.display = 'block';
  };

  hideStart() {
    console.log("hideStart() called");
    document.getElementById('start').style.display = 'none';
  };

  showSet() {
    document.getElementById('set').style.display = 'block';
  };

  hideSet() {
    document.getElementById('set').style.display = 'none';
  };

  //

  stateModelist: boolean = false;
  toggleModes() {
    this.stateModelist = !this.stateModelist;
    if (this.stateModelist) {
      document.getElementById('modelist').style.display = 'block';
      document.getElementById('showModesBtn').innerHTML = 'Hide';

    } else {
      document.getElementById('modelist').style.display = 'none';
      document.getElementById('showModesBtn').innerHTML = 'Show';
    }
  }

  showModes() {
    console.log("showModes() called");
    document.getElementById('modelist').style.display = 'block';
    document.getElementById('mdoelistBtn').innerHTML = "<ion-button id='hideModesBtn' (click)='hideModes()' size='small'>Hide</ion-button>";
  };

  hideModes() {
    console.log("hideModes() called");
    document.getElementById('modelist').style.display = 'none';
    document.getElementById('mdoelistBtn').innerHTML = "<ion-button id='showModesBtn' (click)='showModes()' size='small'>Show</ion-button>";
  };

  //

  statePicker: boolean = false;
  togglePicker() {
    this.statePicker = !this.statePicker;
    if (this.statePicker) {
      document.getElementById('datetimePicker').style.display = 'block';
    } else {
      document.getElementById('datetimePicker').style.display = 'none';
    }
  }

  showPicker() {
    document.getElementById('datetimePicker').style.display = 'block';
  };

  hidePicker() {
    document.getElementById('datetimePicker').style.display = 'none';
  };

  //
  showWorking() {
    document.getElementById('working').style.display = 'block';
  };

  hideWorking() {
    document.getElementById('working').style.display = 'none';
  };

  //
  start() {
    console.log("Start()");
    this.hideStart();
    this.showSet();
  };

  set() {
    console.log("Set()");
    this.hideSet();
    this.showWorking();
  }

  cancelSet() {
    console.log("cancelSet()");
    location.reload();
    this.hideSet();
    this.showStart();
  }

  //
  ngOnInit() {
  };

}
