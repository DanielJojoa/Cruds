import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TespecieanimalComponent } from './tespecieanimal.component';

describe('TespecieanimalComponent', () => {
  let component: TespecieanimalComponent;
  let fixture: ComponentFixture<TespecieanimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TespecieanimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TespecieanimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
