import { LoginComponent } from './login/login.component';
import { TreinosComponent } from './treinos/treinos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { InicioComponent } from './inicio/inicio.component';
import { MembrosComponent } from './membros/membros.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../utils/auth-guard';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'membros',
    component: MembrosComponent,
  },
  {
    path: 'produtos',
    component: ProdutosComponent,
  },
  {
    path: 'treinos',
    component: TreinosComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicoRoutingModule {}
