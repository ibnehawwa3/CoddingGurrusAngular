import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThreadsRoutingModule } from './threads-routing.module';
import { ThreadsComponent } from './threads/threads.component';
import { SideberComponent } from './section/sideber/sideber.component';


@NgModule({
  declarations: [
    ThreadsComponent,
    SideberComponent
  ],
  imports: [
    CommonModule,
    ThreadsRoutingModule
  ]
})
export class ThreadsModule { }
