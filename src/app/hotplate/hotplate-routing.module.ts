import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotplatePage } from './hotplate.page';

const routes: Routes = [
  {
    path: '',
    component: HotplatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotplatePageRoutingModule {}
