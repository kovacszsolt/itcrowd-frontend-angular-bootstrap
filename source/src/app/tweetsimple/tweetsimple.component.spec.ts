import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetsimpleComponent } from './tweetsimple.component';

describe('TweetsimpleComponent', () => {
  let component: TweetsimpleComponent;
  let fixture: ComponentFixture<TweetsimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetsimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetsimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
