import { Produto } from "../../entities/produtos.model";
import { catchError, firstValueFrom, Observable, throwError, map } from "rxjs";

export abstract class AbsProdutosRepository {
    abstract getAll(): Observable<Produto[]>;
    abstract getById(id: string): Observable<Produto>;
    abstract insert(produto: Produto): Promise<any>;
    abstract delete(produto: Produto): Promise<any>;
}
