import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassiveForResultComponent } from './massive-for-result.component';

describe('MassiveForResultComponent', () => {
  let component: MassiveForResultComponent;
  let fixture: ComponentFixture<MassiveForResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MassiveForResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MassiveForResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
