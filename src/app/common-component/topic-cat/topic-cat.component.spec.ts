import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicCatComponent } from './topic-cat.component';

describe('TopicCatComponent', () => {
  let component: TopicCatComponent;
  let fixture: ComponentFixture<TopicCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopicCatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopicCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
