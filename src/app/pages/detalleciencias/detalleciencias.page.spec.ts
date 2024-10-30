import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallecienciasPage } from './detalleciencias.page';

describe('DetallecienciasPage', () => {
  let component: DetallecienciasPage;
  let fixture: ComponentFixture<DetallecienciasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallecienciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
