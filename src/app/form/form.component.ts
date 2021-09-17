import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../core/services/firebase.service';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
 

  constructor(private firebase: FirebaseService,
        public dialogRef: MatDialogRef<FormComponent>, 
        @Inject(MAT_DIALOG_DATA) public data: any
      ) { }

  ngOnInit(): void {
  }

  onRegister(form:any){

    if(this.data === null){
      this.firebase.createNoVacunados({
        ...form.value,
        date: new Date(),
        vaccined: 0,
        doses: 0
      }).subscribe( )
      this.dialogRef.close(FormComponent)
    }
    else{
      this.firebase.agregarNoVacuna(this.data,{
        ...form.value,
        date: new Date(),
        vaccined: 0,
        doses: 0
      }).subscribe( )
      this.dialogRef.close(FormComponent)

    }
   
  }

}