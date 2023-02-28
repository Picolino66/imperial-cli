import { Produto } from "../entities/produtos.model";
import { AbsProdutosRepository } from "../services/protocols/absProdutos.repository";
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class ProdutosService {
  constructor(private readonly repo: AbsProdutosRepository) {}

  async getAll(): Promise<Produto[]> {
    const allProdutos = await this.repo.getAll().toPromise();
    if (!allProdutos) {
      throw new Error('Não foi possível obter os produtos');
    }
    return allProdutos;
  }

  async getById(id: string) {
    return await this.repo.getById(id).toPromise();
  }

  insert(produto: Produto) {
    return new Promise( async (resolve, reject) => {
      const res = await this.repo.insert(produto);
      res.subscribe(
        (r: any) => { resolve(r); },
        (erro: any) => { reject(erro); }
      );
    });
  }

  delete(produto: Produto) {
    return new Promise( async (resolve, reject) => {
      const res = await this.repo.delete(produto);
      res.subscribe(
        (r: any) => { resolve(r); },
        (erro: any) => { reject(erro); }
      );
    });
  }
}
