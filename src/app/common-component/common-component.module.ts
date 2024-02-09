import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonEditorComponent } from './common-editor/common-editor.component';
import { CommonMsCommunityComponent } from './common-ms-community/common-ms-community.component';
import { TopicCatComponent } from './topic-cat/topic-cat.component';



@NgModule({
  declarations: [
    CommonEditorComponent,
    CommonMsCommunityComponent,
    TopicCatComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CommonEditorComponent,CommonMsCommunityComponent,TopicCatComponent]
})
export class CommonComponentModule { }
