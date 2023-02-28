import { Membro } from './../../../domain/entities/membros.model';
import { toArray } from 'rxjs';
import { MembrosService } from './../../../domain/services/membros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membros',
  templateUrl: './membros.component.html',
  styleUrls: ['./membros.component.css']
})
export class MembrosComponent implements OnInit {
  membros: Membro[] = [];

  constructor(
    private _membrosService: MembrosService
  )
  { }

  async ngOnInit(){
    await this.getAll();
  }

  private async getAll(){
    this.membros = await this._membrosService.getAll();
  }

}
