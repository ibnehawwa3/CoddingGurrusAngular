import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarArticlesComponent } from './similar-articles.component';

describe('SimilarArticlesComponent', () => {
  let component: SimilarArticlesComponent;
  let fixture: ComponentFixture<SimilarArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimilarArticlesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimilarArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
