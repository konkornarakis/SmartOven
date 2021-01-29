import { Component, OnInit } from '@angular/core';
import { MenuController, PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';

@Component({
  selector: 'app-ovenset',
  templateUrl: './ovenset.page.html',
  styleUrls: ['./ovenset.page.scss'],
})
export class OvensetPage implements OnInit {

  framework = "";

  constructor(private pickerCtrl: PickerController, public menu: MenuController) {
    this.menu.swipeGesture(false);
  }

  show() {
    document.getElementById('later').style.display ='block';
  }

  showNot() {
    document.getElementById('later').style.display ='none';
  }

  public showModes:boolean = false;
  public buttonName:any = 'show list';

  toggleModes() {
    this.showModes = !this.showModes;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.showModes)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";

  }


  ngOnInit() {
    
  }

}
