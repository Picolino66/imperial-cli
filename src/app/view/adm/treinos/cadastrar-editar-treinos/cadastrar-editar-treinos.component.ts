import { throwError } from 'rxjs';
import { TreinosService } from './../../../../domain/services/treinos.service';
import { Treino } from './../../../../domain/entities/treinos.model';
import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastrar-editar-treinos',
  templateUrl: './cadastrar-editar-treinos.component.html',
  styleUrls: ['./cadastrar-editar-treinos.component.css']
})
export class CadastrarEditarTreinosComponent implements OnInit {

  id: string = '';
  base64String: any;
  cabecalho: string = 'Cadastrar Treino';
  treino = {} as Treino;

  constructor(
    private _treinosService: TreinosService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id){
      this.cabecalho = "Editar Treino";
      this.getById(this.id);
    }
  }

  async onSubmit() {
    try {
      const res = await this._treinosService.insert(this.treino);
      if(res){
        this.aviso("Dados salvos com sucesso!");
        this.redireciona("adm/treinos");
      }else{
        this.aviso("Tente novamente mais tarde!");
      }
    } catch (erro) {
      console.error('Erro:', erro);
    }
  }

  selectImagem64(event: any) {
    const file = event.target?.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.treino.imagem = reader.result?.toString() ? reader.result.toString() : '';
    };
  }

  private async getById(id: string){
    const treinoGet = await this._treinosService.getById(id);
    if(treinoGet){
      this.treino.nome = treinoGet.nome;
      this.treino.data = treinoGet.data;
      this.treino.local = treinoGet.local;
      this.treino.imagem = treinoGet.imagem;
      this.treino.uid = id;
    }
  }

  private aviso(texto: string){
    this.snackBar.open(texto, 'Fechar', {
      duration: 3000, // duração em milissegundos
    });
  }

  private redireciona(caminho: string){
    this.router.navigate([caminho]);
  }

}
