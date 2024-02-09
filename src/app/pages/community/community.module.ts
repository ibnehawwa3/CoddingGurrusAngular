import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityRoutingModule } from './community-routing.module';
import { CommunityComponent } from './community/community.component';
import { ThreadsComponent } from './sections/threads/threads.component';
import { MassiveCommunityComponent } from './sections/massive-community/massive-community.component';
import { CommonComponentModule } from '../../common-component/common-component.module';


@NgModule({
  declarations: [
    CommunityComponent,
    ThreadsComponent,
    MassiveCommunityComponent
  ],
  imports: [
    CommonModule,
    CommunityRoutingModule,CommonComponentModule
  ]
})
export class CommunityModule { }
