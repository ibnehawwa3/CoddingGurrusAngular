import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadsSearchComponent } from './threads-search.component';

describe('ThreadsSearchComponent', () => {
  let component: ThreadsSearchComponent;
  let fixture: ComponentFixture<ThreadsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThreadsSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThreadsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
