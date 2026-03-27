import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './features/main-page/main-page.component';
import { ErrorPageComponent } from './features/error-page/error-page.component';
import { LoginPageComponent } from './features/login-page/login-page.component';
import { MercadoPageComponent } from './features/main-page/mercado-page/mercado-page.component';
import { ComidaPageComponent } from './features/main-page/comida-page/comida-page.component';

const routes: Routes = [
  {path: "", component:MainPageComponent, children:[
    {path: "mercado", component : MercadoPageComponent},
    {path: "comida", component: ComidaPageComponent}
  ]},
  {path: "login", component:LoginPageComponent},
  {path: "**", component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
