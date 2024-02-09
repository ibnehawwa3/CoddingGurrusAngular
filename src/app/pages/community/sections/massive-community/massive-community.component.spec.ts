import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassiveCommunityComponent } from './massive-community.component';

describe('MassiveCommunityComponent', () => {
  let component: MassiveCommunityComponent;
  let fixture: ComponentFixture<MassiveCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MassiveCommunityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MassiveCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
