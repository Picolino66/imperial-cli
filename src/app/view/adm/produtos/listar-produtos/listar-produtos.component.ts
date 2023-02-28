import { Produto } from './../../../../domain/entities/produtos.model';
import { ProdutosService } from './../../../../domain/services/produtos.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  produtos: Produto[] = [];
  colunas = ['nome', 'acoes'];

  constructor(
    private router: Router,
    private _produtosService: ProdutosService,
    private snackBar: MatSnackBar,
    private changeDetectorRef: ChangeDetectorRef
  )
  { }

  async ngOnInit(){
    await this.getAll();
  }

  private async getAll(){
    this.produtos = await this._produtosService.getAll();
  }

  editarProduto(produto: Produto){
    this.router.navigate(['adm/produtos/editar/'+produto.uid]);
  }

  async excluirProduto(produto: Produto){
    try {
      const res = await this._produtosService.delete(produto);
      if(res){
        this.aviso("Produto deletado com sucesso!");
        let produtos = this.produtos;
        const posicao = produtos.findIndex(x => x.uid == produto.uid);
        if (posicao !== -1) {
          produtos.splice(posicao, 1);
        }
        this.produtos = [...produtos];
        this.changeDetectorRef.detectChanges();
      }else{
        this.aviso("Tente novamente mais tarde!");
      }
    } catch (erro) {
      console.error('Erro:', erro);
    }
  }

  adicionarProduto(){
    this.router.navigate(['adm/produtos/cadastrar']);
  }

  private aviso(texto: string){
    this.snackBar.open(texto, 'Fechar', {
      duration: 3000, // duração em milissegundos
    });
  }
}
