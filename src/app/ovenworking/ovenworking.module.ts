import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OvenworkingPageRoutingModule } from './ovenworking-routing.module';

import { OvenworkingPage } from './ovenworking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OvenworkingPageRoutingModule
  ],
  declarations: [OvenworkingPage]
})
export class OvenworkingPageModule {}
