import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XComponent } from './x/x.component';
import { MainComponent } from './main/main.component';
import { P404Component } from './p404/p404.component';
import { DevComponent } from './dev/dev.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'x', component: XComponent },
  { path: 'dev', component: DevComponent },
  
  // 404
  { path: 'p404', component: P404Component },
  { path: '**', redirectTo: '/p404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
