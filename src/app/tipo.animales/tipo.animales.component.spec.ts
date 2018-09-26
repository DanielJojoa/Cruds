import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoAnimalesComponent } from './tipo.animales.component';

describe('Tipo.AnimalesComponent', () => {
  let component: TipoAnimalesComponent;
  let fixture: ComponentFixture<TipoAnimalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoAnimalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoAnimalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
