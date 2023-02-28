import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PublicoRoutingModule } from './view/publico/publico-routing.module';
import { AdmRoutingModule } from './view/adm/adm-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    PublicoRoutingModule,
    AdmRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
