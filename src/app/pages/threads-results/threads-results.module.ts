import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThreadsResultsRoutingModule } from './threads-results-routing.module';
import { ThreadsResultsComponent } from './threads-results/threads-results.component';
import { ThreadsForResultComponent } from './sections/threads-for-result/threads-for-result.component';
import { MassiveForResultComponent } from './sections/massive-for-result/massive-for-result.component';



@NgModule({
  declarations: [
    ThreadsResultsComponent,
    ThreadsForResultComponent,
    MassiveForResultComponent,
  ],
  imports: [
    CommonModule,
    ThreadsResultsRoutingModule
  ]
})
export class ThreadsResultsModule { }
