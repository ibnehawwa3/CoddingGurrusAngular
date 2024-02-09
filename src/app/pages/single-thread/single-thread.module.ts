import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleThreadRoutingModule } from './single-thread-routing.module';
import { SingleThreadComponent } from './single-thread/single-thread.component';
import { CommonComponentModule } from '../../common-component/common-component.module';


@NgModule({
  declarations: [
    SingleThreadComponent
  ],
  imports: [
    CommonModule,
    SingleThreadRoutingModule,CommonComponentModule
  ]
})
export class SingleThreadModule { }
