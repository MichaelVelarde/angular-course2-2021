import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CoreModule} from "./core/core.module";
import {AuthGuard} from "./core/guards/auth.guard";
import { VacunadosComponent } from './Test/vacunados/vacunados.component';
import { NoVacunadosComponent } from './Test/noVacunados/noVacunados.component';
import { StrToDatePipe } from './str-to-date.pipe';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)}
];

@NgModule({
  declarations: [
    AppComponent,
    VacunadosComponent,
    NoVacunadosComponent,
    StrToDatePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    CoreModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
