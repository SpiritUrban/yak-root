import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { XComponent } from './pages/x/x.component';
import { MainComponent } from './pages/main/main.component';
import { P404Component } from './pages/p404/p404.component';
import { DevComponent } from './pages/dev/dev.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },

  {
    path: 'blog',
    loadChildren: () => import('./features/blog/blog.module').then(m => m.BlogModule)
  },

  {
    path: 'examples',
    loadChildren: () => import('./features/examples/examples.module').then(m => m.ExamplesModule)
  },

  { path: 'main', component: MainComponent },
  { path: 'x', component: XComponent },
  { path: 'dev', component: DevComponent },
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
