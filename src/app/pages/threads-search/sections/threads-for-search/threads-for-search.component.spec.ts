import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadsForSearchComponent } from './threads-for-search.component';

describe('ThreadsForSearchComponent', () => {
  let component: ThreadsForSearchComponent;
  let fixture: ComponentFixture<ThreadsForSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThreadsForSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThreadsForSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
