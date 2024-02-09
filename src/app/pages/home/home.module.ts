import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './sections/banner/banner.component';
import { StepProgrammersComponent } from './sections/step-programmers/step-programmers.component';
import { BrowseTopicComponent } from './sections/browse-topic/browse-topic.component';
import { AskOurCommunityComponent } from './sections/ask-our-community/ask-our-community.component';
import { NewsletterComponent } from './sections/newsletter/newsletter.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    StepProgrammersComponent,
    BrowseTopicComponent,
    AskOurCommunityComponent,
    NewsletterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
