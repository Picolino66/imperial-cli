import { Treino } from './../../../../domain/entities/treinos.model';
import { TreinosService } from './../../../../domain/services/treinos.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listar-treinos',
  templateUrl: './listar-treinos.component.html',
  styleUrls: ['./listar-treinos.component.css']
})
export class ListarTreinosComponent implements OnInit {

  treinos: Treino[] = [];
  colunas = ['nome', 'acoes'];

  constructor(
    private router: Router,
    private _treinosService: TreinosService,
    private snackBar: MatSnackBar,
    private changeDetectorRef: ChangeDetectorRef
  )
  { }

  async ngOnInit(){
    await this.getAll();
  }

  private async getAll(){
    this.treinos = await this._treinosService.getAll();
  }

  editarTreino(treino: Treino){
    this.router.navigate(['adm/treinos/editar/'+treino.uid]);
  }

  async excluirTreino(treino: Treino){
    try {
      const res = await this._treinosService.delete(treino);
      if(res){
        this.aviso("Treino deletado com sucesso!");
        let treinos = this.treinos;
        const posicao = treinos.findIndex(x => x.uid == treino.uid);
        if (posicao !== -1) {
          treinos.splice(posicao, 1);
        }
        this.treinos = [...treinos];
        this.changeDetectorRef.detectChanges();
      }else{
        this.aviso("Tente novamente mais tarde!");
      }
    } catch (erro) {
      console.error('Erro:', erro);
    }
  }

  adicionarTreino(){
    this.router.navigate(['adm/treinos/cadastrar']);
  }

  private aviso(texto: string){
    this.snackBar.open(texto, 'Fechar', {
      duration: 3000, // duração em milissegundos
    });
  }
}
