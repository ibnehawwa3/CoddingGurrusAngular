import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreThreadsComponent } from './explore-threads/explore-threads.component';

const routes: Routes = [
  {
    path:'',component:ExploreThreadsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreThreadsRoutingModule { }
