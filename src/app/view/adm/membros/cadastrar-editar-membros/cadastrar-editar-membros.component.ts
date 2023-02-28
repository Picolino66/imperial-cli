import { throwError } from 'rxjs';
import { MembrosService } from './../../../../domain/services/membros.service';
import { Membro } from './../../../../domain/entities/membros.model';
import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastrar-editar-membros',
  templateUrl: './cadastrar-editar-membros.component.html',
  styleUrls: ['./cadastrar-editar-membros.component.css']
})
export class CadastrarEditarMembrosComponent implements OnInit {

  id: string = '';
  base64String: any;
  cabecalho: string = 'Cadastrar Membro';
  membro = {} as Membro;

  constructor(
    private _membrosService: MembrosService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id){
      this.cabecalho = "Editar Membro";
      this.getById(this.id);
    }
  }

  async onSubmit() {
    try {
      const res = await this._membrosService.insert(this.membro);
      if(res){
        this.aviso("Dados salvos com sucesso!");
        this.redireciona("adm/membros");
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
      this.membro.imagem = reader.result?.toString() ? reader.result.toString() : '';
    };
  }

  private async getById(id: string){
    const membroGet = await this._membrosService.getById(id);
    if(membroGet){
      this.membro.nome = membroGet.nome;
      this.membro.idade = membroGet.idade;
      this.membro.curso = membroGet.curso;
      this.membro.imagem = membroGet.imagem;
      this.membro.uid = id;
      this.membro.cargo = membroGet.cargo;
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
