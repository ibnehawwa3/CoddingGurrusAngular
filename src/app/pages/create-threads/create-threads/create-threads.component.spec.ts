import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateThreadsComponent } from './create-threads.component';

describe('CreateThreadsComponent', () => {
  let component: CreateThreadsComponent;
  let fixture: ComponentFixture<CreateThreadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateThreadsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateThreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
