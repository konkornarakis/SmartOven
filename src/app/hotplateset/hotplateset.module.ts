import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotplatesetPageRoutingModule } from './hotplateset-routing.module';

import { HotplatesetPage } from './hotplateset.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotplatesetPageRoutingModule
  ],
  declarations: [HotplatesetPage]
})
export class HotplatesetPageModule {}
