import { Membro } from "../../entities/membros.model";
import { catchError, firstValueFrom, Observable, throwError, map } from "rxjs";

export abstract class AbsMembrosRepository {
    abstract getAll(): Observable<Membro[]>;
    abstract getById(id: string): Observable<Membro>;
    abstract insert(membro: Membro): Promise<any>;
    abstract delete(membro: Membro): Promise<any>;
}
