import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallematePage } from './detallemate.page';

describe('DetallematePage', () => {
  let component: DetallematePage;
  let fixture: ComponentFixture<DetallematePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallematePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
