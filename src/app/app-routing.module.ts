import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./pages/contact-us/contact-us.module').then((m) => m.ContactUsModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path:'community',loadChildren:()=>import('./pages/community/community.module').then((m)=>m.CommunityModule)
  },
  {
    path:'threads-search',loadChildren:()=>import('./pages/threads-search/threads-search.module').then((m)=>m.ThreadsSearchModule)
  },
  {
    path:'threads-results',loadChildren:()=>import('./pages/threads-results/threads-results.module').then((m)=>m.ThreadsResultsModule)
  },
  {
    path:'article',loadChildren:()=>import('./pages/article/article.module').then((m)=>m.ArticleModule)
  },
  {
    path:'email-verification',loadChildren:()=>import('./pages/email-verification/email-verification.module').then((m)=>m.EmailVerificationModule)
  },
  {
    path:'threads',loadChildren:()=>import('./pages/threads/threads.module').then((m)=>m.ThreadsModule)
  },
  {
    path: 'course-details/:id',loadChildren:()=>import('./pages/course-details/course-details.module').then((m)=>m.CourseDetailsModule)
  },
  {
    path:'single-thread',loadChildren:()=>import('./pages/single-thread/single-thread.module').then((m)=>m.SingleThreadModule)
  },
  {
    path:'create-thread',loadChildren:()=>import('./pages/create-threads/create-threads.module').then((m)=>m.CreateThreadsModule)
  },
  {
    path:'about-us',loadChildren:()=>import('./pages/about-us/about-us.module').then((m)=>m.AboutUsModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
