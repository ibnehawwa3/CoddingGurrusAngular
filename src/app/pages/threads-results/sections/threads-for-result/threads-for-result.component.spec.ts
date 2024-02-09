import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadsForResultComponent } from './threads-for-result.component';

describe('ThreadsForResultComponent', () => {
  let component: ThreadsForResultComponent;
  let fixture: ComponentFixture<ThreadsForResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThreadsForResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThreadsForResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
