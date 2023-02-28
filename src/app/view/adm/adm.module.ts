import { ListarTreinosComponent } from './treinos/listar-treinos/listar-treinos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ListarProdutosComponent } from './produtos/listar-produtos/listar-produtos.component';
import { ListarMembrosComponent } from './membros/listar-membros/listar-membros.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CadastrarEditarTreinosComponent } from './treinos/cadastrar-editar-treinos/cadastrar-editar-treinos.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CadastrarEditarProdutosComponent } from './produtos/cadastrar-editar-produtos/cadastrar-editar-produtos.component';
import { CadastrarEditarMembrosComponent } from './membros/cadastrar-editar-membros/cadastrar-editar-membros.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    ListarTreinosComponent,
    DashboardComponent,
    ListarProdutosComponent,
    ListarMembrosComponent,
    CadastrarEditarTreinosComponent,
    CadastrarEditarProdutosComponent,
    CadastrarEditarMembrosComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatTableModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatCheckboxModule
  ]
})
export class AdmModule { }
