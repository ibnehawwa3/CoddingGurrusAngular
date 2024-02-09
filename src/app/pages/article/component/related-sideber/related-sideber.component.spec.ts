import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedSideberComponent } from './related-sideber.component';

describe('RelatedSideberComponent', () => {
  let component: RelatedSideberComponent;
  let fixture: ComponentFixture<RelatedSideberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelatedSideberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelatedSideberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
