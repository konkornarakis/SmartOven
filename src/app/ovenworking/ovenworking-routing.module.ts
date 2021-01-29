import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OvenworkingPage } from './ovenworking.page';

const routes: Routes = [
  {
    path: '',
    component: OvenworkingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OvenworkingPageRoutingModule {}
