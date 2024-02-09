import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkedThreadsComponent } from './bookmarked-threads/bookmarked-threads.component';

const routes: Routes = [
  {
    path:'',component:BookmarkedThreadsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookmarkedThreadsRoutingModule { }
