import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { Produto } from './../domain/entities/produtos.model';
import { AbsProdutosRepository } from "src/app/domain/services/protocols/absProdutos.repository";

export class ProdutosRepository extends AbsProdutosRepository {
  constructor(private readonly http: HttpClient) {
      super();
  }
  private apiUrl = environment.apiUrl+'produtos';

  getAll(): Observable<Produto[]> {
    const produtos = this.http.get<Produto[]>(this.apiUrl).pipe(
      map((data: any[]) => this.toCollection(data))
    );
    return produtos;
  }

  getById(id: string): Observable<Produto> {
    const produto = this.http.get<Produto>(this.apiUrl+'/'+id);
    return produto;
  }

  async insert(produto: Produto): Promise<any> {
    try{
      const headers = {'Content-Type': 'application/json'};
      const body = JSON.stringify(produto);
      return await this.http.post(this.apiUrl, body, { headers });
    } catch (error) {
      return false;
    }
  }

  async delete(produto: Produto): Promise<any> {
    try{
      const headers = {'Content-Type': 'application/json'};
      const body = JSON.stringify(produto);
      return await this.http.post(this.apiUrl+"/delete", body, { headers });
    } catch (error) {
      return false;
    }
  }

  private toCollection(data: any[]): Produto[] {
    const produtos = data.map(
      (dataItem: any) => this.toEntity(dataItem)
    );
    return produtos;
  }

  private toEntity(data: any): Produto {
    const produto = {
      nome: data.nome,
      preco: data.preco,
      precoAssociado: data.precoAssociado,
      disponivel: data.disponivel,
      imagem: data.imagem,
      uid: data.uid
    }
    return produto;
  }
}
