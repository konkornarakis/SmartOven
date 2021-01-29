import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'ovenset',
    loadChildren: () => import('./ovenset/ovenset.module').then( m => m.OvensetPageModule)
  },
  {
    path: 'hotplateset',
    loadChildren: () => import('./hotplateset/hotplateset.module').then( m => m.HotplatesetPageModule)
  },
  {
    path: 'ovenworking',
    loadChildren: () => import('./ovenworking/ovenworking.module').then( m => m.OvenworkingPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
