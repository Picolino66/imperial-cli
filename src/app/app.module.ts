import { MatButtonModule } from '@angular/material/button';
import { ProdutosRepository } from './data/produtos.repository';
import { ProdutosService } from './domain/services/produtos.service';
import { MembrosRepository } from './data/membros.repository';
import { MembrosService } from './domain/services/membros.service';
import { AuthService } from './domain/services/auth.service';
import { TreinosRepository } from './data/treinos.repository';
import { TreinosService } from './domain/services/treinos.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PublicoModule } from './view/publico/publico.module';
import { AdmModule } from './view/adm/adm.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BotaoVoltarComponent } from './utils/botao-voltar/botao-voltar.component';
import { MatIconModule } from '@angular/material/icon';

const createTreinosService = (http: HttpClient) => {
  return new TreinosService(new TreinosRepository(http));
}
const createMembrosService = (http: HttpClient) => {
  return new MembrosService(new MembrosRepository(http));
}
const createProdutosService = (http: HttpClient) => {
  return new ProdutosService(new ProdutosRepository(http));
}

@NgModule({
  declarations: [
    AppComponent,
    BotaoVoltarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PublicoModule,
    AdmModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    { provide: TreinosService, useFactory: createTreinosService, deps: [HttpClient]},
    { provide: MembrosService, useFactory: createMembrosService, deps: [HttpClient]},
    { provide: ProdutosService, useFactory: createProdutosService, deps: [HttpClient]},
    { provide: AuthService,}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
