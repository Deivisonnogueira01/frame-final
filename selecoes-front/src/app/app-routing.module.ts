
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { InformacoesComponent } from "./components/informacoes/informacoes.component";
import { NavComponent } from "./components/nav/nav.component";
import { SelecaoListComponent } from "./components/selecao/selecao-list/selecao-list.component";


const routes: Routes = [
  {
    path: "",
    component: NavComponent,
    children: [
      { path: "home", component: HomeComponent },

      { path: "selecao", component: SelecaoListComponent },

      {path: "info", component: InformacoesComponent}
     

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
