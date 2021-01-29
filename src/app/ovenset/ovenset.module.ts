import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OvensetPageRoutingModule } from './ovenset-routing.module';

import { OvensetPage } from './ovenset.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OvensetPageRoutingModule
  ],
  declarations: [OvensetPage]
})
export class OvensetPageModule {}
