import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrickCmpComponent } from './crick-cmp.component';

describe('CrickCmpComponent', () => {
  let component: CrickCmpComponent;
  let fixture: ComponentFixture<CrickCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrickCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrickCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
