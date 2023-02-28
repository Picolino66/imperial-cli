import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTreinosComponent } from './listar-treinos.component';

describe('ListarTreinosComponent', () => {
  let component: ListarTreinosComponent;
  let fixture: ComponentFixture<ListarTreinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTreinosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTreinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
