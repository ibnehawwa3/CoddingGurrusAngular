import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThreadsComponent } from './create-threads/create-threads.component';

const routes: Routes = [
  {
    path:'',component:CreateThreadsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateThreadsRoutingModule { }
