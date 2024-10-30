import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioalumPage } from './inicioalum.page';

describe('InicioalumPage', () => {
  let component: InicioalumPage;
  let fixture: ComponentFixture<InicioalumPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioalumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
