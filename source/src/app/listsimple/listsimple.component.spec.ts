import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsimpleComponent } from './listsimple.component';

describe('ListsimpleComponent', () => {
  let component: ListsimpleComponent;
  let fixture: ComponentFixture<ListsimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
