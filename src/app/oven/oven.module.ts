import { timer } from 'rxjs';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OvenPageRoutingModule } from './oven-routing.module';

import { OvenPage } from './oven.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OvenPageRoutingModule
  ],
  declarations: [OvenPage]
})
export class OvenPageModule {}
