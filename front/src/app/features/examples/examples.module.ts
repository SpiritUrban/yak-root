import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';

import { FormComponent } from './parts/form/form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './parts/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DashboardComponent } from './parts/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { TreeComponent } from './parts/tree/tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { DragDropComponent } from './parts/drag-drop/drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CardComponent } from './parts/card/card.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


// pages
import { FeedComponent } from './pages/feed/feed.component';


@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
    DashboardComponent,
    TreeComponent,
    DragDropComponent,
    CardComponent,
    FeedComponent
  ],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    DragDropModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ExamplesModule { }
