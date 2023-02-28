import { CadastrarEditarMembrosComponent } from './membros/cadastrar-editar-membros/cadastrar-editar-membros.component';
import { CadastrarEditarProdutosComponent } from './produtos/cadastrar-editar-produtos/cadastrar-editar-produtos.component';
import { CadastrarEditarTreinosComponent } from './treinos/cadastrar-editar-treinos/cadastrar-editar-treinos.component';
import { ListarProdutosComponent } from './produtos/listar-produtos/listar-produtos.component';
import { ListarMembrosComponent } from './membros/listar-membros/listar-membros.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './../../utils/auth-guard';
import { ListarTreinosComponent } from './treinos/listar-treinos/listar-treinos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'adm',
    component: DashboardComponent, canActivate: [AuthGuard]
  },
  {
    path: 'adm/treinos',
    component: ListarTreinosComponent, canActivate: [AuthGuard]
  },
  {
    path: 'adm/treinos/cadastrar',
    component: CadastrarEditarTreinosComponent, canActivate: [AuthGuard]
  },
  {
    path: 'adm/treinos/editar/:id',
    component: CadastrarEditarTreinosComponent, canActivate: [AuthGuard]
  },
  {
    path: 'adm/membros',
    component: ListarMembrosComponent, canActivate: [AuthGuard]
  },
  {
    path: 'adm/membros/cadastrar',
    component: CadastrarEditarMembrosComponent, canActivate: [AuthGuard]
  },
  {
    path: 'adm/membros/editar/:id',
    component: CadastrarEditarMembrosComponent, canActivate: [AuthGuard]
  },
  {
    path: 'adm/produtos',
    component: ListarProdutosComponent, canActivate: [AuthGuard]
  },
  {
    path: 'adm/produtos/cadastrar',
    component: CadastrarEditarProdutosComponent, canActivate: [AuthGuard]
  },
  {
    path: 'adm/produtos/editar/:id',
    component: CadastrarEditarProdutosComponent, canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmRoutingModule {}
