import { Membro } from "../entities/membros.model";
import { AbsMembrosRepository } from "../services/protocols/absMembros.repository";
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class MembrosService {
  constructor(private readonly repo: AbsMembrosRepository) {}

  async getAll(): Promise<Membro[]> {
    const allMembros = await this.repo.getAll().toPromise();
    if (!allMembros) {
      throw new Error('Não foi possível obter os membros');
    }
    return allMembros;
  }

  async getById(id: string) {
    return await this.repo.getById(id).toPromise();
  }

  insert(membro: Membro) {
    return new Promise( async (resolve, reject) => {
      const res = await this.repo.insert(membro);
      res.subscribe(
        (r: any) => { resolve(r); },
        (erro: any) => { reject(erro); }
      );
    });
  }

  delete(membro: Membro) {
    return new Promise( async (resolve, reject) => {
      const res = await this.repo.delete(membro);
      res.subscribe(
        (r: any) => { resolve(r); },
        (erro: any) => { reject(erro); }
      );
    });
  }
}
