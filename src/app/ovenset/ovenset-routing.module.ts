import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OvensetPage } from './ovenset.page';

const routes: Routes = [
  {
    path: '',
    component: OvensetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OvensetPageRoutingModule {}
