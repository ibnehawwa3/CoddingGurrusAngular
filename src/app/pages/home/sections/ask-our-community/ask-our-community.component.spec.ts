import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskOurCommunityComponent } from './ask-our-community.component';

describe('AskOurCommunityComponent', () => {
  let component: AskOurCommunityComponent;
  let fixture: ComponentFixture<AskOurCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AskOurCommunityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AskOurCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
