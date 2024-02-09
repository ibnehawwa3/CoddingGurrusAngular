import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateThreadsRoutingModule } from './create-threads-routing.module';
import { CreateThreadsComponent } from './create-threads/create-threads.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@NgModule({
  declarations: [
    CreateThreadsComponent
  ],
  imports: [
    CommonModule,
    CreateThreadsRoutingModule,CKEditorModule
  ]
})
export class CreateThreadsModule { }
