import { Component } from '@angular/core';
import { FirebaseService } from './core/services/firebase.service';
import {MatDialog} from "@angular/material/dialog";
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  template: `
  <p>Vacine: A=1 , B=2, C=3 </p>
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
  <div *ngIf=allvacuned() [style.background]="'red'"> ERYBODY VACCINATED </div>
  <div style="display: flex; flexDirection: row;">&nbsp;&nbsp;
    <p>Not Vaccined</p> &nbsp;&nbsp; &nbsp;&nbsp;
    <p>TOTAL: {{setTotalNoVacunados()}} </p>
  </div>
  <div style="display: flex; flexDirection: row;">
  <div *ngFor="let vacunado of noVacunados">
  <app-noVacunados  [name] = "vacunado[1]['name']" [age] = "vacunado[1]['age']" [date] = "(vacunado[1]['date']| strToDate)|date:'dd/MM/yyyy'" [disease] = "vacunado[1]['disease']" [vaccineType] = "vacunado[1]['vaccineType']"
  [vaccined] = "vacunado[1]['vaccined']" [doses] = "vacunado[1]['doses']">
  <button [disabled]="vacunado[1]['disease'] ||
      vacunado[1]['age'] <= 12"
    (click)="vacunar(vacunado[0])">
      vaccinate
    </button>
  </app-noVacunados>
  
  </div>
  </div>`,
})
export class AppComponent {
  totalVacunados = 0;
  totalNoVacunados = 0;
  vacunados: any[] = [];
  noVacunados: any[] = [];
  constructor(private firebase: FirebaseService,  private matDialog: MatDialog) {
  
  }
  ngOnInit(): void {
    this.getDataVacunados();
    this.getDataNoVacunados();
  }

  getDataVacunados() {
    this.firebase.getAllVacunados().subscribe(res =>
      this.vacunados =  Object.entries(res));
    
  }
  getDataNoVacunados() {
    this.firebase.getAllNoVacunados().subscribe(res =>
      this.noVacunados =  Object.entries(res));
  }
  allvacuned(){
    for (let i = 0; i < this.noVacunados.length; i++) {
      if(!this.noVacunados[i][1]['disease'] && this.noVacunados[i][1]['age'] >12)
        return false; 
    }
    return true; 
  }

  setTotalVacunados():number {
    return this.vacunados.length;
  }
  setTotalNoVacunados():number {
    return this.noVacunados.length;
  }
  hardRefresh(){
    
  }
  onCreateNewAccount(){
    this.matDialog.open(FormComponent)
  }
  vacunar(idPersona){
    for (let i = 0; i < this.noVacunados.length; i++) {
        if(idPersona === this.noVacunados[i][0]){
          this.noVacunados[i][1]['doses'] +=1; 
          this.firebase.ponerVacuna(idPersona,this.noVacunados[i][1] ).subscribe(() => this.getDataNoVacunados());
          if(this.tieneTodasLasVacunas( this.noVacunados[i][1]['vaccineType'] ,this.noVacunados[i][1]['doses'])){
            this.firebase.delete(idPersona).subscribe(() => this.getDataNoVacunados());
            this.firebase.create(this.noVacunados[i][1]).subscribe(() => this.getDataVacunados());   
          }   
        }
        

    }
  }
  tieneTodasLasVacunas(type,doses):Boolean{
    if(type === 'A' && doses === 1) return true
    if(type === 'B' && doses === 2) return true
    if(type === 'C' && doses === 3) return true

  }
}
