import { Treino } from "../entities/treinos.model";
import { AbsTreinosRepository } from "../services/protocols/absTreinos.repository";
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class TreinosService {
  constructor(private readonly repo: AbsTreinosRepository) {}

  async getAll(): Promise<Treino[]> {
    const allTreinos = await this.repo.getAll().toPromise();
    if (!allTreinos) {
      throw new Error('Não foi possível obter os treinos');
    }
    return allTreinos;
  }

  async getById(id: string) {
    return await this.repo.getById(id).toPromise();
  }

  insert(treino: Treino) {
    return new Promise( async (resolve, reject) => {
      const res = await this.repo.insert(treino);
      res.subscribe(
        (r: any) => { resolve(r); },
        (erro: any) => { reject(erro); }
      );
    });
  }

  delete(treino: Treino) {
    return new Promise( async (resolve, reject) => {
      const res = await this.repo.delete(treino);
      res.subscribe(
        (r: any) => { resolve(r); },
        (erro: any) => { reject(erro); }
      );
    });
  }
}
