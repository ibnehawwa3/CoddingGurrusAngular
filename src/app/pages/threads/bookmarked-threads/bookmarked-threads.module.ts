import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarkedThreadsRoutingModule } from './bookmarked-threads-routing.module';
import { BookmarkedThreadsComponent } from './bookmarked-threads/bookmarked-threads.component';
import { CommonComponentModule } from '../../../common-component/common-component.module';


@NgModule({
  declarations: [
    BookmarkedThreadsComponent
  ],
  imports: [
    CommonModule,
    BookmarkedThreadsRoutingModule,CommonComponentModule
  ]
})
export class BookmarkedThreadsModule { }
