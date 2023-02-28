import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEditarMembrosComponent } from './cadastrar-editar-membros.component';

describe('CadastrarEditarMembrosComponent', () => {
  let component: CadastrarEditarMembrosComponent;
  let fixture: ComponentFixture<CadastrarEditarMembrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarEditarMembrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarEditarMembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
