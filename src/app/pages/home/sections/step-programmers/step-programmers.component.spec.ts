import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepProgrammersComponent } from './step-programmers.component';

describe('StepProgrammersComponent', () => {
  let component: StepProgrammersComponent;
  let fixture: ComponentFixture<StepProgrammersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepProgrammersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepProgrammersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
