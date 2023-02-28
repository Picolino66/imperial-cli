import { Treino } from "../../entities/treinos.model";
import { catchError, firstValueFrom, Observable, throwError, map } from "rxjs";

export abstract class AbsTreinosRepository {
    abstract getAll(): Observable<Treino[]>;
    abstract getById(id: string): Observable<Treino>;
    abstract insert(treino: Treino): Promise<any>;
    abstract delete(treino: Treino): Promise<any>;
}
