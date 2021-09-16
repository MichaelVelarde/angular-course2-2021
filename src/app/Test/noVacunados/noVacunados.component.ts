import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-noVacunados',
  templateUrl: './noVacunados.component.html',
  styleUrls: ['./noVacunados.component.css']
})
export class NoVacunadosComponent{
  @Input() name: string|undefined;
  @Input() age: number|undefined;
  @Input() date: string|undefined;
  @Input() disease: boolean|undefined;
  @Input() vaccineType: string|undefined;
  @Input() vaccined: boolean|undefined;
  @Input() doses: number|undefined;
  

  constructor() {}
 


}