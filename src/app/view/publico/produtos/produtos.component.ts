import { Produto } from './../../../domain/entities/produtos.model';
import { toArray } from 'rxjs';
import { ProdutosService } from './../../../domain/services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: Produto[] = [];
  constructor(
    private _produtosService: ProdutosService
  )
  { }

  async ngOnInit(){
    await this.getAll();
  }

  abrirWhatsApp() {
    const numero = '35999500713'; // Número para abrir conversa no WhatsApp
    window.open(`https://api.whatsapp.com/send?phone=${numero}`, '_blank');
  }

  private async getAll(){
    this.produtos = await this._produtosService.getAll();
  }

}
