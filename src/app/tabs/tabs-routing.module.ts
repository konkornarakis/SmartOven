import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage, 
    children: [
      {
        path: 'oven',
        children: [
          {
            path: '',
            // loadChildren: '../oven/oven.module#OvenPageModule'
            loadChildren: () => import('../oven/oven.module').then(m => m.OvenPageModule)
          }
        ]
      },
      {
        path: 'hotplate',
        children: [
          {
            path: '',
            // loadChildren: '../hotplate/hotplate.module#HotplatePageModule'
            loadChildren: () => import('../hotplate/hotplate.module').then(m => m.HotplatePageModule)
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            //loadChildren: '../home/home.module#HomePageModule'
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
          } 
        ]
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
