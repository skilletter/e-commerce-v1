import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagizoomComponent } from './magizoom.component';

describe('MagizoomComponent', () => {
  let component: MagizoomComponent;
  let fixture: ComponentFixture<MagizoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagizoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagizoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
