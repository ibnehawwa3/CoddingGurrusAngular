import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRelatedHeaderComponent } from './course-related-header.component';

describe('CourseRelatedHeaderComponent', () => {
  let component: CourseRelatedHeaderComponent;
  let fixture: ComponentFixture<CourseRelatedHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseRelatedHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseRelatedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
