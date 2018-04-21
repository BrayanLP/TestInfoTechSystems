import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* Importando Modulo de Rutas */
import { RouterModule, Routes } from '@angular/router';

import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
  { path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
