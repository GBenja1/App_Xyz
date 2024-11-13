import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CtrlusuariosPage } from './ctrlusuarios.page';

describe('CtrlusuariosPage', () => {
  let component: CtrlusuariosPage;
  let fixture: ComponentFixture<CtrlusuariosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CtrlusuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
