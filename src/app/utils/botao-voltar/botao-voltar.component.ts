import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-botao-voltar',
  templateUrl: './botao-voltar.component.html',
  styleUrls: ['./botao-voltar.component.css']
})
export class BotaoVoltarComponent {

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
