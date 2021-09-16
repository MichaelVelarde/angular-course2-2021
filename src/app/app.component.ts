import { Component } from '@angular/core';
import { FirebaseService } from './core/services/firebase.service';

@Component({
  selector: 'app-root',
  template: `
  <p>1 VACUNAS</p>
  <div style="display: flex; flexDirection: row;">&nbsp;&nbsp;
    <p>Vaccined</p> &nbsp;&nbsp; &nbsp;&nbsp;
    <p>TOTAL: {{setTotalVacunados()}} </p>
  </div>
  <div style="display: flex; flexDirection: row;">
  <div *ngFor="let vacunado of vacunados">
  <app-vacunados  [name] = "vacunado[1]['name']" [age] = "vacunado[1]['age']" [date] = "(vacunado[1]['date']| strToDate)|date:'dd/MM/yyyy'"
  [vaccined] = "vacunado[1]['vaccined']"
  ></app-vacunados>
  </div>
  </div>
  <div style="display: flex; flexDirection: row;">&nbsp;&nbsp;
    <p>No Vaccined</p> &nbsp;&nbsp; &nbsp;&nbsp;
    <p>TOTAL: {{setTotalVacunados()}} </p>
  </div>
  <div style="display: flex; flexDirection: row;">
  <div *ngFor="let vacunado of vacunados">
  <app-vacunados  [name] = "vacunado[1]['name']" [age] = "vacunado[1]['age']" [date] = "(vacunado[1]['date']| strToDate)|date:'dd/MM/yyyy'"
  [vaccined] = "vacunado[1]['vaccined']"
  ></app-vacunados>
  </div>
  </div>`,
})
export class AppComponent {
  totalVacunados = 0;
  totalNoVacunados = 0;
  vacunados = [];
  noVacunados = [];
  constructor(private firebase: FirebaseService) {
    this.firebase
      .getAllVacunados()
      .subscribe((data) => this.getDataVacunados(data));
    this.firebase
      .getAllNoVacunados()
      .subscribe((data) => this.getDataNoVacunados(data));
  }
  getDataVacunados(data) {
    this.vacunados = Object.entries(data);
    console.log(data);
  }
  getDataNoVacunados(data) {
    this.noVacunados = Object.entries(data);
    console.log(data);
  }
  setTotalVacunados():number {
    return this.vacunados.length;
  }
  setTotalNoVacunados():number {
    return this.noVacunados.length;
  }
}
