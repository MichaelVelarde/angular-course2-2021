import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../core/services/firebase.service';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private firebase: FirebaseService,
      public dialogRef: MatDialogRef<FormComponent>) { }

  ngOnInit(): void {
  }

  onRegister(form:any){

  }

}