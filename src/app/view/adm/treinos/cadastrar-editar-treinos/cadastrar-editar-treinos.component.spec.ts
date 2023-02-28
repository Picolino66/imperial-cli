import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEditarTreinosComponent } from './cadastrar-editar-treinos.component';

describe('CadastrarEditarTreinosComponent', () => {
  let component: CadastrarEditarTreinosComponent;
  let fixture: ComponentFixture<CadastrarEditarTreinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarEditarTreinosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarEditarTreinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
