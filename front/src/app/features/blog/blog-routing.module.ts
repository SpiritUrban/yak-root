import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';
import { FeedComponent } from './pages/feed/feed.component';

const routes: Routes = [
  {
    path: '',
    component: FeedComponent,
    // canActivate: [NoAuthGuard]
  },
  {
    path: 'create',
    component: CreateComponent,
    // canActivate: [NoAuthGuard]
  },
  {
    path: ':id/edit',
    component: EditComponent,
    // canActivate: [NoAuthGuard]
  },


  /*
  {
    path: ':username',
    component: ProfileComponent,
    resolve: {
      profile: ProfileResolver
    },
    children: [
      {
        path: '',
        component: ProfileArticlesComponent
      },
      {
        path: 'favorites',
        component: ProfileFavoritesComponent
      }
    ]
  }
  */

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
