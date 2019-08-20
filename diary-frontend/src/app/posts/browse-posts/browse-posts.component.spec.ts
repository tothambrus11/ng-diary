import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsePostsComponent } from './browse-posts.component';

describe('BrowsePostsComponent', () => {
  let component: BrowsePostsComponent;
  let fixture: ComponentFixture<BrowsePostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowsePostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
