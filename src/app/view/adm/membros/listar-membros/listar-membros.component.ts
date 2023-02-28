import { Membro } from './../../../../domain/entities/membros.model';
import { MembrosService } from './../../../../domain/services/membros.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listar-membros',
  templateUrl: './listar-membros.component.html',
  styleUrls: ['./listar-membros.component.css']
})
export class ListarMembrosComponent implements OnInit {

  membros: Membro[] = [];
  colunas = ['nome', 'acoes'];

  constructor(
    private router: Router,
    private _membrosService: MembrosService,
    private snackBar: MatSnackBar,
    private changeDetectorRef: ChangeDetectorRef
  )
  { }

  async ngOnInit(){
    await this.getAll();
  }

  private async getAll(){
    this.membros = await this._membrosService.getAll();
  }

  editarMembro(membro: Membro){
    this.router.navigate(['adm/membros/editar/'+membro.uid]);
  }

  async excluirMembro(membro: Membro){
    try {
      const res = await this._membrosService.delete(membro);
      if(res){
        this.aviso("Membro deletado com sucesso!");
        let membros = this.membros;
        const posicao = membros.findIndex(x => x.uid == membro.uid);
        if (posicao !== -1) {
          membros.splice(posicao, 1);
        }
        this.membros = [...membros];
        this.changeDetectorRef.detectChanges();
      }else{
        this.aviso("Tente novamente mais tarde!");
      }
    } catch (erro) {
      console.error('Erro:', erro);
    }
  }

  adicionarMembro(){
    this.router.navigate(['adm/membros/cadastrar']);
  }

  private aviso(texto: string){
    this.snackBar.open(texto, 'Fechar', {
      duration: 3000, // duração em milissegundos
    });
  }
}
