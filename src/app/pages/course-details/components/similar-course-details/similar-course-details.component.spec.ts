import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarCourseDetailsComponent } from './similar-course-details.component';

describe('SimilarCourseDetailsComponent', () => {
  let component: SimilarCourseDetailsComponent;
  let fixture: ComponentFixture<SimilarCourseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimilarCourseDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimilarCourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
