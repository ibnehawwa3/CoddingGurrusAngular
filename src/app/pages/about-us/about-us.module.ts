import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { CommonComponentModule } from '../../common-component/common-component.module';


@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,CommonComponentModule
  ]
})
export class AboutUsModule { }
