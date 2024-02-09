import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThreadsResultsComponent } from './threads-results/threads-results.component';

const routes: Routes = [
  {
    path:'',component:ThreadsResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThreadsResultsRoutingModule { }
