import { Treino } from './../../../domain/entities/treinos.model';
import { toArray } from 'rxjs';
import { TreinosService } from './../../../domain/services/treinos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treinos',
  templateUrl: './treinos.component.html',
  styleUrls: ['./treinos.component.css']
})
export class TreinosComponent implements OnInit {
  treinos: Treino[] = [];

  constructor(
    private _treinosService: TreinosService
  )
  { }

  async ngOnInit(){
    await this.getAll();
  }

  private async getAll(){
    this.treinos = await this._treinosService.getAll();
  }

}
