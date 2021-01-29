import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotplatesetPage } from './hotplateset.page';

const routes: Routes = [
  {
    path: '',
    component: HotplatesetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotplatesetPageRoutingModule {}
