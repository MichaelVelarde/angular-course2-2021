import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../core/services/firebase.service';
import {MatDialogRef} from "@angular/material/dialog";
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  constructor(private firebase: FirebaseService,
        
      public dialogRef: MatDialogRef<FormComponent>, 
      ) { }

  ngOnInit(): void {
  }

  onRegister(form:any){


    this.firebase.createNoVacunados({
      ...form.value,
      date: new Date(),
      vaccined: 0,
      doses: 0
    }).subscribe( )
  
    this.dialogRef.close(FormComponent)

  }

}