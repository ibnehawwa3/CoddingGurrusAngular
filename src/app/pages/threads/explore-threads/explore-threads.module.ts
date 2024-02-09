import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreThreadsRoutingModule } from './explore-threads-routing.module';
import { ExploreThreadsComponent } from './explore-threads/explore-threads.component';
import { CommonComponentModule } from '../../../common-component/common-component.module';


@NgModule({
  declarations: [
    ExploreThreadsComponent
  ],
  imports: [
    CommonModule,
    ExploreThreadsRoutingModule,CommonComponentModule
  ]
})
export class ExploreThreadsModule { }
