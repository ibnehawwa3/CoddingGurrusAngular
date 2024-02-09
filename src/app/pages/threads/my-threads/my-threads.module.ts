import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyThreadsRoutingModule } from './my-threads-routing.module';
import { MyThreadsComponent } from './my-threads/my-threads.component';


@NgModule({
  declarations: [
    MyThreadsComponent
  ],
  imports: [
    CommonModule,
    MyThreadsRoutingModule
  ]
})
export class MyThreadsModule { }
