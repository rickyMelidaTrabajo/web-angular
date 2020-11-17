import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosDetallesComponent } from './articulos-detalles.component';

describe('ArticulosDetallesComponent', () => {
  let component: ArticulosDetallesComponent;
  let fixture: ComponentFixture<ArticulosDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticulosDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
