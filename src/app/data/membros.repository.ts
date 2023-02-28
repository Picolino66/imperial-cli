import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { Membro } from './../domain/entities/membros.model';
import { AbsMembrosRepository } from "../domain/services/protocols/absMembros.repository";
import { environment } from 'src/environments/environment';

export class MembrosRepository extends AbsMembrosRepository {
  constructor(private readonly http: HttpClient) {
      super();
  }
  private apiUrl = environment.apiUrl+'membros';

  getAll(): Observable<Membro[]> {
    const membros = this.http.get<Membro[]>(this.apiUrl).pipe(
      map((data: any[]) => this.toCollection(data))
    );
    return membros;
  }

  getById(id: string): Observable<Membro> {
    const membro = this.http.get<Membro>(this.apiUrl+'/'+id);
    return membro;
  }

  async insert(membro: Membro): Promise<any> {
    try{
      const headers = {'Content-Type': 'application/json'};
      const body = JSON.stringify(membro);
      return await this.http.post(this.apiUrl, body, { headers });
    } catch (error) {
      return false;
    }
  }

  async delete(membro: Membro): Promise<any> {
    try{
      const headers = {'Content-Type': 'application/json'};
      const body = JSON.stringify(membro);
      return await this.http.post(this.apiUrl+"/delete", body, { headers });
    } catch (error) {
      return false;
    }
  }

  private toCollection(data: any[]): Membro[] {
    const membros = data.map(
      (dataItem: any) => this.toEntity(dataItem)
    );
    return membros;
  }

  private toEntity(data: any): Membro {
    const membro = {
      nome: data.nome,
      idade: data.idade,
      curso: data.curso,
      imagem: data.imagem,
      cargo: data.cargo,
      uid: data.uid
    }
    return membro;
  }
}
