import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { BlogRoutingModule } from './blog-routing.module';
import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';
import { FeedComponent } from './pages/feed/feed.component';
import { PostCardComponent } from './components/post-card/post-card.component';


@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    FeedComponent,
    PostCardComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MatCardModule
  ]
})
export class BlogModule { }
