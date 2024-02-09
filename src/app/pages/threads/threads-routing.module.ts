import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThreadsComponent } from './threads/threads.component';


const routes: Routes = [
  {
    path:'',component:ThreadsComponent,
     children:[
      {
        path:'my-threads',loadChildren:()=>import('../threads/my-threads/my-threads.module').then(m=>m.MyThreadsModule)
      },
      {
        path:'bookmarked-threads',loadChildren:()=>import('../threads/bookmarked-threads/bookmarked-threads.module').then(m=>m.BookmarkedThreadsModule)
      },
      {
        path:'explore-threads',loadChildren:()=>import('../threads/explore-threads/explore-threads.module').then(m=>m.ExploreThreadsModule)
      },
      { path: 'threads', redirectTo: '/my-threads', pathMatch: 'full' },
      { path: '**', redirectTo: '/my-threads' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThreadsRoutingModule { }
