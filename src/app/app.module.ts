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
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { SharedMaterialModule } from './shared/shared-material.module';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)}
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    VacunadosComponent,
    NoVacunadosComponent,
    StrToDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedMaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    CoreModule
  ],
  entryComponents: [FormComponent],
  bootstrap: [AppComponent]
})

export class AppModule {
}
