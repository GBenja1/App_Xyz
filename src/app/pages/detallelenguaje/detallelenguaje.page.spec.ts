import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallelenguajePage } from './detallelenguaje.page';

describe('DetallelenguajePage', () => {
  let component: DetallelenguajePage;
  let fixture: ComponentFixture<DetallelenguajePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallelenguajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
