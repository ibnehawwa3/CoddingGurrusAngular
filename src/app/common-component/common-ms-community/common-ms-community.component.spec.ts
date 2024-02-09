import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonMsCommunityComponent } from './common-ms-community.component';

describe('CommonMsCommunityComponent', () => {
  let component: CommonMsCommunityComponent;
  let fixture: ComponentFixture<CommonMsCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonMsCommunityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommonMsCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
