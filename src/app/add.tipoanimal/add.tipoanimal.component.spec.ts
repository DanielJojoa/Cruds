import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Add.TipoanimalComponent } from './add.tipoanimal.component';

describe('Add.TipoanimalComponent', () => {
  let component: Add.TipoanimalComponent;
  let fixture: ComponentFixture<Add.TipoanimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Add.TipoanimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Add.TipoanimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
