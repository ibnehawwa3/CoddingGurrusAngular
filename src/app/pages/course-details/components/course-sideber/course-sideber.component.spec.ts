import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSideberComponent } from './course-sideber.component';

describe('CourseSideberComponent', () => {
  let component: CourseSideberComponent;
  let fixture: ComponentFixture<CourseSideberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseSideberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseSideberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
