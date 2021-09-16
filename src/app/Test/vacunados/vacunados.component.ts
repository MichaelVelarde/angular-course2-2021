import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-vacunados',
  templateUrl: './vacunados.component.html',
  styleUrls: ['./vacunados.component.css']
})
export class VacunadosComponent{
  @Input() name: string|undefined;
  @Input() age: number|undefined;
  @Input() date: string|undefined;
  @Input() disease: boolean|undefined;
  @Input() vaccineType: string|undefined;
  @Input() vaccined: boolean|undefined;
  @Input() doses: number|undefined;
  

  constructor() {}

  getString(bol):String{
    if(bol)
      return 'yes';
    return "no";
  } 


}