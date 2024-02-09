import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkedThreadsComponent } from './bookmarked-threads.component';

describe('BookmarkedThreadsComponent', () => {
  let component: BookmarkedThreadsComponent;
  let fixture: ComponentFixture<BookmarkedThreadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookmarkedThreadsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookmarkedThreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
