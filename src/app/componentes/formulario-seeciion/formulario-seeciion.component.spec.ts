import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSeeciionComponent } from './formulario-seeciion.component';

describe('FormularioSeeciionComponent', () => {
  let component: FormularioSeeciionComponent;
  let fixture: ComponentFixture<FormularioSeeciionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioSeeciionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioSeeciionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
