import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreThreadsComponent } from './explore-threads.component';

describe('ExploreThreadsComponent', () => {
  let component: ExploreThreadsComponent;
  let fixture: ComponentFixture<ExploreThreadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExploreThreadsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExploreThreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
