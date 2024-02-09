import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMassiveCommunityComponent } from './search-massive-community.component';

describe('SearchMassiveCommunityComponent', () => {
  let component: SearchMassiveCommunityComponent;
  let fixture: ComponentFixture<SearchMassiveCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchMassiveCommunityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchMassiveCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
