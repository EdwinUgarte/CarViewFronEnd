import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListaComponent } from './components/lista/lista.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { FormsModule } from '@angular/forms';


const routes : Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component: InicioComponent},
  {path:'auto', component: PerfilComponent},
  {path:'auto/:id', component: PerfilComponent},
  {path:'lista', component: ListaComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListaComponent,
    NavbarComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
