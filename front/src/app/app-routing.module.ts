import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { XComponent } from './x/x.component';
import { MainComponent } from './main/main.component';
import { P404Component } from './p404/p404.component';
import { DevComponent } from './dev/dev.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },

  {
    path: 'blog',
    loadChildren: () => import('./features/blog/blog.module').then(m => m.BlogModule)
  },

  {
    path: 'examples',
    loadChildren: () => import('./features/examples/examples.module').then(m => m.ExamplesModule)
  },


  { path: 'x', component: XComponent },
  { path: 'dev', component: DevComponent },
  
  // 404
  { path: 'p404', component: P404Component },
  { path: '**', redirectTo: '/p404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preload all modules; optionally we could
    // implement a custom preloading strategy for just some
    // of the modules (PRs welcome 😉)
    // preloadingStrategy: PreloadAllModules,
    // relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
