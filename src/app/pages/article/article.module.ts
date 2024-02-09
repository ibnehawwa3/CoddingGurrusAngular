import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article/article.component';
import { SideberComponent } from './component/sideber/sideber.component';
import { ArticleHeaderComponent } from './component/article-header/article-header.component';
import { ArticleDetailsComponent } from './component/article-details/article-details.component';
import { SimilarArticlesComponent } from './component/similar-articles/similar-articles.component';
import { RelatedSideberComponent } from './component/related-sideber/related-sideber.component';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    ArticleComponent,
    SideberComponent,
    ArticleHeaderComponent,
    ArticleDetailsComponent,
    SimilarArticlesComponent,
    RelatedSideberComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,ClipboardModule
  ]
})
export class ArticleModule { }
