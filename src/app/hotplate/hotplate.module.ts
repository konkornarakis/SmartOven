import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotplatePageRoutingModule } from './hotplate-routing.module';

import { HotplatePage } from './hotplate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotplatePageRoutingModule
  ],
  declarations: [HotplatePage]
})
export class HotplatePageModule {}
