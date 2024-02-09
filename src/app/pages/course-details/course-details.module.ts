import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseDetailsRoutingModule } from './course-details-routing.module';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseDetailsMainContentComponent } from './components/course-details-main-content/course-details-main-content.component';
import { CourseDetailsHeaderComponent } from './components/course-details-header/course-details-header.component';
import { CourseRelatedHeaderComponent } from './components/course-related-header/course-related-header.component';
import { CourseSideberComponent } from './components/course-sideber/course-sideber.component';
import { SimilarCourseDetailsComponent } from './components/similar-course-details/similar-course-details.component';
import { ClipboardModule } from 'ngx-clipboard';


@NgModule({
  declarations: [
    CourseDetailsComponent,
    CourseDetailsHeaderComponent,
    CourseDetailsMainContentComponent,
    CourseRelatedHeaderComponent,
    CourseSideberComponent,
    SimilarCourseDetailsComponent
  ],
  imports: [
    CommonModule,
    CourseDetailsRoutingModule,ClipboardModule
  ]
})
export class CourseDetailsModule { }
