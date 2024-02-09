import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThreadsSearchComponent } from './threads-search/threads-search.component';

const routes: Routes = [
  {
    path:'',component:ThreadsSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThreadsSearchRoutingModule { }
