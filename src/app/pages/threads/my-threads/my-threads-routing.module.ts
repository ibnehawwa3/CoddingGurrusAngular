import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyThreadsComponent } from './my-threads/my-threads.component';


const routes: Routes = [
  {
    path:'',component:MyThreadsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyThreadsRoutingModule { }
