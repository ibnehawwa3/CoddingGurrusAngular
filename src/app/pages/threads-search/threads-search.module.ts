import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThreadsSearchRoutingModule } from './threads-search-routing.module';
import { ThreadsSearchComponent } from './threads-search/threads-search.component';
import { ThreadsForSearchComponent } from './sections/threads-for-search/threads-for-search.component';
import { SearchMassiveCommunityComponent } from './sections/search-massive-community/search-massive-community.component';
import { CommonComponentModule } from '../../common-component/common-component.module';



@NgModule({
  declarations: [
    ThreadsSearchComponent,
    ThreadsForSearchComponent,SearchMassiveCommunityComponent
  ],
  imports: [
    CommonModule,
    ThreadsSearchRoutingModule,CommonComponentModule
  ]
})
export class ThreadsSearchModule { }
