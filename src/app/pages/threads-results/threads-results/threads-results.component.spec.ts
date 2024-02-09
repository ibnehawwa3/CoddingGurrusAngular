import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadsResultsComponent } from './threads-results.component';

describe('ThreadsResultsComponent', () => {
  let component: ThreadsResultsComponent;
  let fixture: ComponentFixture<ThreadsResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThreadsResultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThreadsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
