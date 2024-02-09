import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleThreadComponent } from './single-thread/single-thread.component';

const routes: Routes = [
  {
    path:'',component:SingleThreadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleThreadRoutingModule { }
