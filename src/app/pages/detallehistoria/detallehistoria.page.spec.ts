import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallehistoriaPage } from './detallehistoria.page';

describe('DetallehistoriaPage', () => {
  let component: DetallehistoriaPage;
  let fixture: ComponentFixture<DetallehistoriaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallehistoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
