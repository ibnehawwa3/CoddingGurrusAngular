import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailsMainContentComponent } from './course-details-main-content.component';

describe('CourseDetailsMainContentComponent', () => {
  let component: CourseDetailsMainContentComponent;
  let fixture: ComponentFixture<CourseDetailsMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseDetailsMainContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseDetailsMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
