import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { Treino } from './../domain/entities/treinos.model';
import { AbsTreinosRepository } from "src/app/domain/services/protocols/absTreinos.repository";

export class TreinosRepository extends AbsTreinosRepository {
  constructor(private readonly http: HttpClient) {
      super();
  }
  private apiUrl = environment.apiUrl+'treinos';

  getAll(): Observable<Treino[]> {
    const treinos = this.http.get<Treino[]>(this.apiUrl).pipe(
      map((data: any[]) => this.toCollection(data))
    );
    return treinos;
  }

  getById(id: string): Observable<Treino> {
    const treino = this.http.get<Treino>(this.apiUrl+'/'+id);
    return treino;
  }

  async insert(treino: Treino): Promise<any> {
    try{
      const headers = {'Content-Type': 'application/json'};
      const body = JSON.stringify(treino);
      return await this.http.post(this.apiUrl, body, { headers });
    } catch (error) {
      return false;
    }
  }

  async delete(treino: Treino): Promise<any> {
    try{
      const headers = {'Content-Type': 'application/json'};
      const body = JSON.stringify(treino);
      return await this.http.post(this.apiUrl+"/delete", body, { headers });
    } catch (error) {
      return false;
    }
  }

  private toCollection(data: any[]): Treino[] {
    const treinos = data.map(
      (dataItem: any) => this.toEntity(dataItem)
    );
    return treinos;
  }

  private toEntity(data: any): Treino {
    const treino = {
      nome: data.nome,
      local: data.local,
      data: data.data,
      imagem: data.imagem,
      uid: data.uid
    }
    return treino;
  }
}
