import { throwError } from 'rxjs';
import { ProdutosService } from './../../../../domain/services/produtos.service';
import { Produto } from './../../../../domain/entities/produtos.model';
import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastrar-editar-produtos',
  templateUrl: './cadastrar-editar-produtos.component.html',
  styleUrls: ['./cadastrar-editar-produtos.component.css']
})
export class CadastrarEditarProdutosComponent implements OnInit {

  id: string = '';
  base64String: any;
  cabecalho: string = 'Cadastrar Produto';
  produto = {} as Produto;

  constructor(
    private _produtosService: ProdutosService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id){
      this.cabecalho = "Editar Produto";
      this.getById(this.id);
    }
  }

  async onSubmit() {
    try {
      const res = await this._produtosService.insert(this.produto);
      if(res){
        this.aviso("Dados salvos com sucesso!");
        this.redireciona("adm/produtos");
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
      this.produto.imagem = reader.result?.toString() ? reader.result.toString() : '';
    };
  }

  private async getById(id: string){
    const produtoGet = await this._produtosService.getById(id);
    if(produtoGet){
      this.produto.nome = produtoGet.nome;
      this.produto.preco = produtoGet.preco;
      this.produto.precoAssociado = produtoGet.precoAssociado;
      this.produto.imagem = produtoGet.imagem;
      this.produto.uid = id;
      this.produto.disponivel = produtoGet.disponivel;
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
