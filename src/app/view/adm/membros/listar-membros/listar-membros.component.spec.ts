import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMembrosComponent } from './listar-membros.component';

describe('ListarMembrosComponent', () => {
  let component: ListarMembrosComponent;
  let fixture: ComponentFixture<ListarMembrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarMembrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarMembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
